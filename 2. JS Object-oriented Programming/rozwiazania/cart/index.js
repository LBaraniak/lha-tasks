function generateID() {
  return Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)
}

class Validator {
  static isNumber(value) {
    if(typeof value !== 'number') throw new Error('Value must be a number')
  }

  static isString(value) {
    if(typeof value !== 'string') throw new Error('Value must be a string')
  }

  static isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
}

class Product {
  category = [];

  constructor(name, price, category, discount = 0) {
    Validator.isNumber(price);
    Validator.isNumber(discount);
    Validator.isString(name);
    Validator.isString(category);

    this._id = generateID();
    this.discount = discount;
    this.category.push(category);
    this.name = name;
    this.price = this.calculatePrice(price);
  }

  addCategory(category) {
    Validator.isString(category);

    this.category.push(category);
  }

  changeName(name) {
    Validator.isString(name);

    this.name = name;
  }

  addDiscount(discount) {
    Validator.isNumber(discount);

    this.discount = discount;
    this.calculatePrice(this.price)
  }

  changePrice(price) {
    Validator.isNumber(price);

    this.price = this.calculatePrice(price);
  }

  getPrice() {
    return this.price;
  }

  calculatePrice(price) {
    if(this.discount != 0) {
      return this.price = price - ( price * this.discount / 100 );
    }

    return this.price = price;
  }
}

class CartItem {
  _id;
  product;
  quantity;
  amount;

  constructor(product, quantity = 1) {
    Validator.isObject(product);
    Validator.isNumber(quantity);

    this._id = generateID();
    this.product = product;
    this.quantity = quantity;
    this._calculateAmount();
  }

  getAmount() {
    return this.amount;
  }

  addDiscount(discount) {
    Validator.isNumber(discount);

    this.product.addDiscount(discount);
    this._calculateAmount();
  }

  _calculateAmount() {
    this.amount =  this.product.getPrice() * this.quantity;
  }

  changeQuantity(quantity) {
    Validator.isNumber(quantity);

    this.quantity = quantity;
    this._calculateAmount();
  }
}


// Singletone
class DiscountCodes {
  discountCodesList = [];

  constructor () {
    if (!DiscountCodes.instance) {
      DiscountCodes.instance = this
    }
    // Initialize object
    return DiscountCodes.instance
  }

  addDiscountCode(name, value) {
    Validator.isString(name);
    Validator.isNumber(value);

    const code = {name: name, value: value};
    this.discountCodesList.push(code)
  }

  getDiscountCodesValues(name) {
    Validator.isString(name);

    return this.discountCodesList.find(element => {
      return element.name === name;
    })
  }
}
const discountCodes = new DiscountCodes()
Object.freeze(discountCodes)


class Cart {
  _id;
  _cartItemsList = [];
  cartDiscount = 0;
  cardDiscountCode = '';

  constructor() {
    this._id = generateID();
  }

  addToCart(cartItem) {
    Validator.isObject(cartItem);

    this._cartItemsList.push(cartItem);
  }

  getCartItemList() {
    return this._cartItemsList;
  }

  deleteCartItem(cartItem) {
    Validator.isObject(cartItem);

    const index = this._cartItemsList.findIndex(element => {
      return element._id === cartItem._id;
    })

    if (index === -1) return

    this._cartItemsList.splice(index, 1);
  }

  addDiscountCode(discountCode) {
    Validator.isString(discountCode);

    const discountValue = discountCodes.getDiscountCodesValues(discountCode);

    console.log(discountValue)

    if(discountValue) {
      const { name, value } = discountValue;
      this.cardDiscountCode = name;
      this.cartDiscount = value;
    }
  }

  calculateCart() {
    const totalAmount = this._cartItemsList.reduce(function (total, currentItem) {
      total += currentItem.amount;
      return total
    } , 0)

    if(this.cartDiscount != 0) {
      return totalAmount - ( totalAmount * this.cartDiscount / 100 );
    }

    return totalAmount;
  }
}
//Scenariusz I
// 1. Generuje 2 produkty

const produkt_1 = new Product('Test1', 22.22, 'pierwsza');
console.log(produkt_1)

const produkt_2 = new Product('Test2', 34.3434, 'druga');
console.log(produkt_2)

// 2. Tworzę koszyk, Dodaje je do Koszyka (tworze w locie CartItem)
const cart = new Cart();
const cartItem1 = new CartItem(produkt_1)
cart.addToCart(cartItem1)

const cartItem2 = new CartItem(produkt_2, 3)
cart.addToCart(cartItem2)

console.log('Cart: ', cart.getCartItemList())

// 3. Zmieniam cene jednego z produktów

produkt_1.changePrice(999.99)
console.log('Cart after change price: ', cart.getCartItemList())


// 4. Zmieniam ilość sztuk w koszyku

cartItem1.changeQuantity(2);
console.log('Cart: ', cart.getCartItemList())

// 5. dodaje rabat na produkt poprzez CartItem

cartItem1.addDiscount(33.33)
console.log('Cart: ', cart.getCartItemList())

// 6. Sprawdzam cene koszyka

console.log('total amount', cart.calculateCart())
// 7. Dodaje jeszcze jeden produkt

const produkt_3 = new Product('Test3', 123, 'trzecia')
const cartItem3 = new CartItem(produkt_3, 2)
cart.addToCart(cartItem3)

console.log(cart)

// 8. usuwam jeden z produktów

cart.deleteCartItem(cartItem2)
console.log('Cart: ', cart.getCartItemList())


// 9. dodaje kody rabatowe (2)

discountCodes.addDiscountCode('test', 40)
discountCodes.addDiscountCode('test2', 50)

console.log(discountCodes)
console.log('Cart: ', cart)

// 10. wpisuje błędny kod rabatowy w koszyk
cart.addDiscountCode('test3');
console.log('Cart: ', cart)


// 11. sprawdzam cene koszyka
console.log('total amount', cart.calculateCart())

// 12. Wpisuje prawidlowy kod
cart.addDiscountCode('test2');
console.log('Cart: ', cart)

// 13. Sprawdzam cene koszyka
console.log('total amount', cart.calculateCart())

// 
// 2.