// ex3.js
module.exports = class Account {
  constructor () {
    this.balance = 0;
  }

  deposit (amount) {
    this.balance += amount;
    this.displayBalance();
    return this;
  }

  withdraw (amount) {
    this.balance -= amount;
    this.displayBalance();
    return this;
  }

  status () {
    this.displayBalance();
  }

  displayBalance () {
    console.log(`account balance is: ${this.balance}`);
    return this;
  }
};
