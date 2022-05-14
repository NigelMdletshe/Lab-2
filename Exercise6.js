'use strict'

// Exercise
const account = {
  deposits: 0,
  withdrawls: 0,
  deposit: function (amount) {
    this.deposits += amount
  },
  withdraw: function (amount) {
    this.withdrawls += amount
  },
  Balance: function () {
    return (this.deposits - this.withdrawls)
  },

  Summary: function () {
    return `This account has a balance of R ${this.Balance()}. There have been deposits totalling R ${this.deposits} and withdrwals totalling R ${this.withdrawls}.`
  }
}

account.deposit(100)
account.withdraw(50)
account.deposit(200)
account.withdraw(50)
account.deposit(100)
account.deposit(50)
const AccountSummary = account.Summary()
console.log(AccountSummary)
