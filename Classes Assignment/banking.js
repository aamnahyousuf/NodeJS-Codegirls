class BankAccount {
  constructor(accountHolder, balance) {
    this.accHolder = accountHolder;
    this.bal = balance;
  }

  deposit(depositAmount) {
    this.bal += depositAmount;
    console.log(`You have deposited: ${depositAmount}. New balance: ${this.bal}`);
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > this.bal) {
      console.log("Beta pehly itne paise kama len.");
      return; 
    }
    this.bal -= withdrawAmount;
    console.log(`You have withdrawn: ${withdrawAmount}. Remaining balance: ${this.bal}`);
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountHolder, balance, interestRate) {
    super(accountHolder, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    const interest = (this.bal * this.interestRate) / 100;
    console.log(`Interest at ${this.interestRate}%: ${interest}`);
    return interest;
  }
}

const acc1 = new SavingsAccount("Haider", 15000, 8.9);
acc1.deposit(90000);   
acc1.withdraw(20000); 
acc1.withdraw(999999);
acc1.calculateInterest();