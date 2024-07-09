class BankAccount {
  name;
  #balance;
  
  constructor(name, balance) {
    this.name = name;
    this.#balance = 0;
  }
  
  #checkbalance() {
    console.log(`You have $${this.#balance}.`);
  }
  
  deposit(amount) {
    this.#balance += amount;
    this.#checkbalance();
  }
  
  withdraw(amount) {
    if (amount > this.#balance) {
      throw new RangeError('Not enough cash.');
    }
    else {
      this.#balance -= amount;
      this.#checkbalance();
    }
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds