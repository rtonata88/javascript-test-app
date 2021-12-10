class Calculator {
  constructor(...args) {
    this.numbers = args[0];
  }

  add() {
    console.log(this.numbers);
    let addition = (previousValue, currentValue) =>
      previousValue + currentValue;
    return this.numbers.reduce(addition);
  }

  minus() {
    console.log(this.numbers);
    let difference = (previousValue, currentValue) =>
      previousValue - currentValue;
    return this.numbers.reduce(difference);
  }

  multiply() {
    let product = (previousValue, currentValue) => previousValue * currentValue;
    return this.numbers.reduce(product);
  }

  divide() {
    let quotient = (previousValue, currentValue) =>
      previousValue / currentValue;
    return this.numbers.reduce(quotient);
  }
}

module.exports = Calculator;
