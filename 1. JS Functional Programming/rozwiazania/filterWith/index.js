const data = [
  {
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Sheppard Jensen",
      },
    ],
  },
  {
    _id: "5e985a0709dfa1e6fd93c6ad",
    age: 32,
    eyeColor: "brown",
    name: "Madelyn Dickson",
    gender: "female",
    company: "KENGEN",
    email: "madelyndickson@kengen.com",
    phone: "+1 (984) 521-2439",
    tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
    friends: [
      {
        id: 0,
        name: "Bruce Barton",
      },
      {
        id: 1,
        name: "Juliet Schmidt",
      },
      {
        id: 2,
        name: "Horton Haley",
      },
      {
        id: 3,
        name: "Herminia Witt",
      },
    ],
  },
  {
    _id: "5e985a0737e2306e9aef6ecd",
    age: 26,
    eyeColor: "blue",
    name: "Mcguire Mercado",
    gender: "male",
    company: "LINGOAGE",
    email: "mcguiremercado@lingoage.com",
    phone: "+1 (963) 450-2194",
    tags: ["cupidatat", "occaecat", "amet", "qui", "elit", "esse", "deserunt"],
    friends: [
      {
        id: 0,
        name: "Loraine Harper",
      },
      {
        id: 1,
        name: "Luann Randall",
      },
      {
        id: 2,
        name: "Obrien Rich",
      },
      {
        id: 3,
        name: "Noble Wilkerson",
      },
    ],
  },
  {
    _id: "5e985a07148cfba58c860ec2",
    age: 26,
    eyeColor: "brown",
    name: "Marina Porter",
    gender: "female",
    company: "GORGANIC",
    email: "marinaporter@gorganic.com",
    phone: "+1 (867) 417-3497",
    tags: ["laborum", "aliquip", "sit", "adipisicing", "aute", "cupidatat", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Blair Hill",
      },
      {
        id: 1,
        name: "Ebony Jimenez",
      },
    ],
  },
  {
    _id: "5e985a074984f9f08ccaaa4c",
    age: 25,
    eyeColor: "green",
    name: "Barlow Ferguson",
    gender: "male",
    company: "TOYLETRY",
    email: "barlowferguson@toyletry.com",
    phone: "+1 (837) 484-2231",
    tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
    friends: [
      {
        id: 0,
        name: "Delacruz Acevedo",
      },
      {
        id: 1,
        name: "Gloria Tanner",
      },
      {
        id: 2,
        name: "Cantrell Myers",
      },
      {
        id: 3,
        name: "Fisher Leonard",
      },
    ],
  },
];

// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie

class Validator {

  static validateData(arr, phrase) {
    if(phrase.toString().length < 2) throw new Error('szukana fraza jest za krótka');
    if(!this.validateNumber(phrase) && !this.validateString(phrase)) throw new Error('szukana fraza nie jest ani stringiem ani liczba');
    if(!this.validateArray(arr) || arr.length < 0) throw new Error('badany obiekt nie jest tablica lub jest pusty');
  }

  static validateNumber(value) {
    return typeof value === 'number';
  }

  static validateString(value) {
    return typeof value === 'string';
  }

  static validateObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  static validateArray(value) {
    return Array.isArray(value) && value.length > 0;
  }
}

function filterWith(arr, phrase) {
  Validator.validateData(arr, phrase);
  const copyOfArray = arr;

  return copyOfArray.filter(el => {
    const needle = new RegExp(phrase.toString());

    if( Validator.validateNumber(el) ) return el.toString().match(needle)

    if (Validator.validateString(el) ) return el.match(needle)

    if (Validator.validateObject(el) ) return filterWith(Object.values(el), phrase).length > 0

    if( Validator.validateArray(el) ) return filterWith(el, phrase).length > 0

    return false
  })
}
//jako 1 argument podajemy naszą tablicę obiektów. Jako drugi argument szukaną frazę np:

// console.log(filterWith(data, "Cummings Baxter"));
console.log(filterWith(data, "nisi"));
// console.log(filterWith(data, "Delacruz Acevedo"));
// console.log(filterWith(data, 25))