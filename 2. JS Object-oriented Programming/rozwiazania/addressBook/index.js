
class Helper {
  static generateID() {
    return Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)
  }

  static filterWith(arr, phrase) {
    Validator.validateData(arr, phrase);
    const copyOfArray = arr;

    return copyOfArray.filter(el => {
      const needle = new RegExp(phrase);
      if( Validator.validateNumber(el) ) return el.toString().match(needle)
      if (Validator.validateString(el) ) {
        return el.match(needle)
      }
      if (Validator.validateObject(el) ) return this.filterWith(Object.values(el), phrase).length > 0
      if( Validator.validateArray(el) ) return this.filterWith(el, phrase).length > 0
      return false
    })
  }

  static deleteElementByIDFromArray(element, array) {
    const result = array.filter(row => {
      return row._id !== element._id;
    })

    if (result === -1) return

    return result
  }
}

class Validator {

  static validateData(arr, phrase) {
    if(phrase.toString().length < 2) console.error('szukana fraza jest za krótka');
    if(!this.validateNumber(phrase) && !this.validateString(phrase)) console.error('szukana fraza nie jest ani stringiem ani liczba');
    if(!this.validateArray(arr) || arr.length < 0) console.error('badany obiekt nie jest tablica lub jest pusty');
  }

  static validateNumber(value) {
    if(typeof value !== 'number') {
      console.error('input value in not a number');
      return  false;
    }
    return true;
  }

  static validateString(value) {
    if(typeof value !== 'string') {
      console.error('input value in not a string');
      return  false;
    }
    return true;
  }

  static validateObject(value) {
    if(Object.prototype.toString.call(value) !== '[object Object]') {
      console.error('input value in not an object');
      return  false;
    }
    return true;
  }

  static validateArray(value) {
    if(!Array.isArray(value)) {
      console.error('input value in not an Array or is empty');
      return  false;
    }
    return true;
  }

  static checkEmail(email) {
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      console.error('Invalid email address');
      return false;
    }
  }
}

class Contact {
  constructor(name, surname, email) {
    this._id = Helper.generateID();
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._createDate = new Date(Date.now());
  }

  _setModyficationDate() {
    this.modificationDate = new Date(Date.now());
  }

  updateName(name) {
    this.name = name;
    this._setModyficationDate();
  }

  updateSurname(surname) {
    this.surname = surname;
    this._setModyficationDate();
  }

  updateEmail(email) {
    this.email = email;
    this._setModyficationDate();
  }
  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
}

class Group {
  _id;
  groupName;
  contactList = ["uuid"];

  constructor(groupName) {
    this._id = Helper.generateID();
    this.groupName = groupName;
  }

  setGroupName(name) {
    this.groupName = name;
  }

  addContact(contact) {
    this.contactList.push(contact);
  }

  deleteContact(contact) {
    const copy = this.contactList.slice(0)
    this.contactList = Helper.deleteElementByIDFromArray(contact, copy);
  }

  isContactInGroup(contact) {
    return this.contactList.find(element => element._id === contact._id)
  }

  // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
  // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
}

class AddressBook {
  contactsList = [];
  groupsList = [];

  addContact(name, surname, email) {
    (!this.findContact(email)) ? this.contactsList.push(new Contact(name, surname, email)) : console.error(`User z mailem ${email} już istnieje, email musi być unikalny`);
  }

  deleteContact(contact) {
    (this.contactsList.some(element => element._id === contact._id)) ? this.contactsList = Helper.deleteElementByIDFromArray(contact, this.contactsList) : console.error(`Użytkownik nie istnieje na liście kontaktów`);
    let groupError = true;
    this.groupsList.forEach(group => {
      if(group.isContactInGroup(contact)) {
        group.deleteContact(contact);
        groupError = false;
      }
    })
    if(groupError) console.error(`Użytkownik nie istnieje w żadnej grupie kontaktów`)
  }

  editContact(contact, name, surname, email) {
    if (name) contact.updateName(name);
    if (surname) contact.updateSurname(surname)
    if (email) contact.updateEmail(email)
  }

  getContactList() {
    console.log(this.contactsList)
  }


  addGroup(groupName) {
    this.groupsList.push(new Group(groupName))
  }

  deleteGroup(group) {
    this.groupsList = Helper.deleteElementByIDFromArray(group, this.groupsList);
  }

  editGroup(groupId, groupName) {
    // czy istnieje ten group this.groupsList.findById
    group.editName(groupName);
  }

  getGroupsList() {
    console.log(this.groupsList)
  }


  showContactInGroup(group) {
    console.log('Contacts in group: ',group.contactList)
  }

  addContactToGroup(contactId, groupName) {
    // czy istnieje ten kontakt this.contactList.findById
    // czy istnieje ten groupName this.groupsList.findById
    // czy dany user nie jest już dodany
    // group.add(contactId)

    this.groupsList.forEach(group=>{
      if(group.groupName === groupName && !group.isContactInGroup(contact)) group.addContact(contact);
    })
  }

  findContact(phrase) {
    if(Helper.filterWith(this.contactsList, phrase).length > 0) {
      return true
    }
    return false
  }
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}


// 1. Utworzenie nowej ksiażki adresowej

const addressBook = new AddressBook();

console.log(addressBook)

//2. dodanie kilka adresów
addressBook.addContact('Lukas', 'Baraniak', 'baraniak.l@gmail.com');
addressBook.addContact('Ela', 'Baraniak', 'baraniak.em@gmail.com');
addressBook.addContact('Lukas', 'Baraniak', 'baraniak.l@gmail.com');
addressBook.addContact('Franek', 'Baraniak', 'baraniak.f@gmail.com');

console.log(addressBook.getContactList())

// 3. Edytuje jeden z kontaktów (3)

addressBook.editContact("uuid", 'Romek', 'Worek', 'lolek@lelwk.pl')

console.log(addressBook.getContactList())

// 4. Wyrzucam kontak

addressBook.deleteContact("uuid")

console.log(addressBook)

// 5. Tworze 2 grupy i dodaję kontakt do jednej z nich

addressBook.addGroup('Wisienki')
addressBook.addGroup('Sliwki')

addressBook.getGroupsList();

addressBook.addContactToGroup("uuid", 'Wisienki')

console.log(addressBook)
addressBook.showContactInGroup(addressBook.groupsList[0])

// 6. zmieniam nazwe grupy

addressBook.editGroup(addressBook.groupsList[0], 'jablka')

console.log(addressBook)
addressBook.showContactInGroup(addressBook.groupsList[0])

// 7. usuwam grupe

addressBook.deleteGroup(addressBook.groupsList[0])

console.log(addressBook)
addressBook.showContactInGroup(addressBook.groupsList[0])