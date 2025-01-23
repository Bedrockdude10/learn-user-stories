import { Bank } from '../src/bank';

const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

// scenario 2: unsuccessful account creation due to customer being below 18

try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// Test scenarios for deposit
try {
    bank.deposit(1234567890, 2000); // Valid deposit
    if (bank.checkBalance(1234567890) !== 7000) {
        console.log('Deposit test failed');
    } else {
        console.log('Deposit test passed');
    }
} catch (e) {
    console.log('Deposit test failed with error:', e.message);
}

try {
    bank.deposit(1234567890, -500); // Invalid deposit
    console.log('Negative deposit test failed');
} catch (e) {
    console.log('Negative deposit test passed:', e.message);
}

try {
    bank.deposit(9999999999, 1000); // Non-existent account
    console.log('Non-existent account deposit test failed');
} catch (e) {
    console.log('Non-existent account deposit test passed:', e.message);
}

// Test scenarios for withdraw
try {
    bank.withdraw(1234567890, 1000); // Valid withdrawal
    if (bank.checkBalance(1234567890) !== 6000) {
        console.log('Withdraw test failed');
    } else {
        console.log('Withdraw test passed');
    }
} catch (e) {
    console.log('Withdraw test failed with error:', e.message);
}

try {
    bank.withdraw(1234567890, -500); // Invalid withdrawal
    console.log('Negative withdrawal test failed');
} catch (e) {
    console.log('Negative withdrawal test passed:', e.message);
}

try {
    bank.withdraw(1234567890, 10000); // Exceeds balance
    console.log('Overdraw test failed');
} catch (e) {
    console.log('Overdraw test passed:', e.message);
}

try {
    bank.withdraw(9999999999, 1000); // Non-existent account
    console.log('Non-existent account withdrawal test failed');
} catch (e) {
    console.log('Non-existent account withdrawal test passed:', e.message);
}

// Test scenarios for check balance
try {
    const balance = bank.checkBalance(1234567891); // Valid check
    if (balance !== 10000) {
        console.log('Check balance test failed');
    } else {
        console.log('Check balance test passed');
    }
} catch (e) {
    console.log('Check balance test failed with error:', e.message);
}

try {
    bank.checkBalance(9999999999); // Non-existent account
    console.log('Non-existent account balance check test failed');
} catch (e) {
    console.log('Non-existent account balance check test passed:', e.message);
}