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

    this.id = generateID();
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

console.log(new Product('test', 12.93, 'jakas', 5));

class CartItem {
  id;
  product;
  quantity;
  amount;

  constructor(product, quantity = 1) {
    Validator.isObject(product);
    Validator.isNumber(quantity);

    this.id = generateID();
    this.product = product;
    this.quantity = quantity;
  }

  getAmount() {
    return this.amount;
  }

  calculateAmount() {
    this.amount = this.product.getPrice() * this.quantity;
  }

  changeQuantity(quantity) {
    Validator.isNumber(quantity);

    this.quantity = quantity;
    this.calculateAmount();
  }
}


class DiscountCodes {
  discountCodesList = [];

  static addDiscountCode(name, value) {
    Validator.isString(name);
    Validator.isNumber(value);

    const code = {name: name, value: value};
    this.discountCodesList.push(code)
  }

  static getDiscountCodesValues(name) {
    Validator.isString(name);

    return this.discountCodesList.find(element => {
      element.name === name;
    })
  }
}



class Cart {
  id;
  cartItemsList = [];
  cartDiscount = 0;
  cardDiscountCode = '';

  constructor() {
    this.id = generateID();
  }

  addToCart(cartItem) {
    Validator.isObject(cartItem);

    this.cartItemsList.push(cartItem);
  }

  deleteCartItem(cartItem) {
    Validator.isObject(cartItem);

    const index = this.cartItemsList.findIndex(element => {
      return element.id === cartItem.id;
    })

    this.cartItemsList.splice(index, 1);
  }

  addDiscountCode(discountCode) {
    Validator.isString(discountCode);

    const discountValue = DiscountCodes.getDiscountCodesValues(discountCode);

    if(discountValue) {
      const { name, value } = discountValue;
      this.cardDiscountCode = name;
      this.cartDiscount = value;
    }
  }

  calculateCart() {
    const totalAmount = this.cartItemsList.reduce(function (total, currentItem) {
      total += currentItem.amount;
    } , 0)

    if(this.cartDiscount != 0) {
      return totalAmount - ( totalAmount * this.cartDiscount / 100 );
    }

    return totalAmount;
  }
}