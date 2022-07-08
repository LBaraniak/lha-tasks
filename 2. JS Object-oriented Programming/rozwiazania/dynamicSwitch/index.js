// test

class Switch {
  cases = [];
  conditions = [];

  add(condition, callback) {
    if (typeof condition != 'boolean') {
      throw new Error('Condition must be an boolan!');
    }
    if (typeof callback != 'function') {
      throw new Error('Callback must be an function!');
    }
    this.cases.push(callback);
    this.conditions.push(condition);
  }
  isValid() {
    let result = true;
    for(let i = 0; i < this.conditions.length; i++) {
      if(this.conditions[i]) {
        this.cases[i]();
        result = false;
      }
    }
    this.cases = [];
    this.conditions = [];
    return result;
  }

  isEmpty() {
    if(this.cases.length == 0 && this.conditions.length == 0) return true
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