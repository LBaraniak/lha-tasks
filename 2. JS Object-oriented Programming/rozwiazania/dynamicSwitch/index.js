// test

class Switch {
  _conditions = [];

  add(condition, callback) {
    if (typeof condition != 'boolean') {
      throw new Error('Condition must be an boolan!');
    }
    if (typeof callback != 'function') {
      throw new Error('Callback must be an function!');
    }

    this._conditions.push({condition,callback});
  }
  
  isValid() {
    let result = true;
    for(let i = 0; i < this._conditions.length; i++) {
      if(this._conditions[i]) {
        this._conditions[i].callback();
        result = false;
      }
    }
    this._conditions = [];
    return result;
  }

  isEmpty() {
    if(this._conditions.length == 0) return true
    return false;
  }
}

// ma to działać tak:
const formChecker = new Switch();
const value = "test";

formChecker.add(value.length < 5, () => {
  console.error("value is too short");
});

formChecker.add(!value.includes("@"), () => {
  console.error("value is not an email");
});

// formChecker.isEmpty() === false
console.log(formChecker.isEmpty()); // === false
console.log(formChecker.isValid()); // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.isEmpty() === true
console.log(formChecker.isEmpty())