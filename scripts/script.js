const accounts = [
  {type: 'Checking', accountNumber: 'xxx2467', bankName: 'Chase', status: 'Active', balance: 1196.44},
  {type: 'Savings', accountNumber: 'xxx4562', bankName: 'Chase', status: 'Active', balance: 16347.20},
  {type: 'Credit', accountNumber: 'xxx1245', bankName: 'Wells Fargo', status: 'Past Due', balance: 6845.21}
];
const contacts = [
  {firstName: 'Ivan', lastName: 'Mosley'},
  {firstName: 'Taylor', lastName: 'Green'},
  {firstName: 'Michael', lastName: 'Dennis'}
];

function createAccount(type, accountNumber, bankName, status, balance) {
  return {
    type: type,
    accountNumber: accountNumber,
    bankName: bankName,
    status: status,
    balance: balance,
  }
};

function createContact(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName
  }
};