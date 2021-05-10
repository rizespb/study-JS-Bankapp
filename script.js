'use strict';

////////////////////////////////////////////////
////////////////////////////////////////////////
// LECTURES

////////////////////////////////////////////////
/// 141. Simple Array Methods
////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

/// SLICE
/// возвращает элементы массива, начиная с позиции agr1 до позиции agr2 (не включаю позицию arg2). НЕ изменяет исходный массив

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice()); // копия массива
console.log([...arr]); // копия массива

/// SPLICE
/// Изменяет исходный массив, удаляя элементы с позиции arg1 в количсетве agr2. Возвраает массив из удаленных элементов

console.log(arr.splice(-1));
arr.splice(1, 2);
console.log(arr);

/// REVERSE
/// меняет порядок элементов в arr на обратный. Изменят исходный массив.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

/// CONCAT
/// НЕ изменяет исходный массив
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // аналогично

/// JOIN
console.log(letters.join('-'));



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-------- forEach --------');
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});





////////////////////////////////////////////////
/// 143. forEach With Maps and Sets
////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

////////////////////////////////////////////////
/// 146. Coding Challenge 1
////////////////////////////////////////////////

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a  copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far

*/
/*
const dogsJulia1 = [3, 5, 2, 12, 7],
  dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [3, 5, 2, 12, 7],
  dogsKate2 = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const newArr1 = arr1.slice(1, -2);
  const arrayBoth = newArr1.concat(arr2);

  arrayBoth.forEach(function (age, index) {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is still a puppy, and is ${age} years old`
      );
    }
  });
};

checkDogs(dogsJulia1, dogsKate1);
checkDogs(dogsJulia2, dogsKate2);


////////////////////////////////////////////////
/// 148. The map Method
////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 1 EUR = 1.1 USD
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//  return mov * eurToUsd;
// });

/// The same with arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movementsUSD);

/// The same with for...of
const movementsUSDforOf = [];

for (const mov of movements) movementsUSDforOf.push(mov * eurToUsd);

console.log(movementsUSDforOf);

/////////

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

////////////////////////////////////////////////
/// 150. The filter Method
////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

/// The same with for...of
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);



////////////////////////////////////////////////
/// 151. The reduce Method
////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

/// accumulator is lika a snowball
// const balance = movements.reduce(function (accumulator, cur, index, arr) {
//   console.log(`Iteration ${index}: ${accumulator}`);
//   return accumulator + cur;
// }, 0);

const balance = movements.reduce((accumulator, cur) => accumulator + cur, 0);
console.log(balance);

/// The same with for...of
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (mov > acc ? (acc = mov) : acc),
  movements[0]
);
console.log(max);
*/

////////////////////////////////////////////////
/// 152. Coding Challenge 2
////////////////////////////////////////////////
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*

const data1 = [5, 2, 4, 1, 15, 8, 3],
  data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(humanAges);
  const adultDogs = humanAges.filter(humanAge => humanAge >= 18);
  console.log(adultDogs);
  const averageHumanAge = adultDogs.reduce(
    (sum, age, index, arr) => sum + age / arr.length,
    0
  );
  console.log(`Average age of adult dogs is ${averageHumanAge}`);
};

console.log(data1);
calcAverageHumanAge(data1);
console.log(data2);
calcAverageHumanAge(data2);



////////////////////////////////////////////////
/// 153. The Magic of Chaining Methods
////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE Трубопровод
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

////////////////////////////////////////////////
/// 154. Coding Challenge 3
////////////////////////////////////////////////
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(humanAges);
  const adultDogs = humanAges.filter(humanAge => humanAge >= 18);
  console.log(adultDogs);
  const averageHumanAge = adultDogs.reduce(
    (sum, age, index, arr) => sum + age / arr.length,
    0
  );
  console.log(`Average age of adult dogs is ${averageHumanAge}`);
};
*/

/*
const data1 = [5, 2, 4, 1, 15, 8, 3],
  data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const averageHumanAge = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((sum, age, index, arr) => sum + age / arr.length, 0);
  console.log(`Average age of adult dogs is ${averageHumanAge}`);
};

console.log(data1);
calcAverageHumanAge(data1);
console.log(data2);
calcAverageHumanAge(data2);
*/

/*
////////////////////////////////////////////////
/// 155. The find Method
////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);


////////////////////////////////////////////////
/// 159. some and every
////////////////////////////////////////////////

/// SOME
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

/// EVERY
console.log(movements.every(mov => mov > 0));
console.log(movements.every(mov => mov > -1000));

/// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

////////////////////////////////////////////////
/// 160. flat and flatMap
////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());


////////////////////////////////////////////////
/// 161. Sorting Arrays
////////////////////////////////////////////////

const owners = ['Jonas', 'Zam', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// return < 0, then A, B (keep order)
// return > 0, then B, A (switch order)
// Сортировка по возрастающим
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// Сортировка по убывающим
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
// console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);
*/

////////////////////////////////////////////////
/// 162. More Ways of Creating and Filling Arrays
////////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
x.map(() => 5);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// Мы пишем _ в качестве имени переменной, которую не используем, но которая в соответствии с синтаксисом должна присутствовать
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Первый способ создать массив из node-list
document
  .querySelector('.balance__value')
  .addEventListener('click', function () {
    const movementsUI = Array.from(
      document.querySelectorAll('.movements__value'),
      elem => Number(elem.textContent.replace('€', ''))
    );
    console.log(movementsUI);

    // Второй способ создать массив из node-list
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    console.log(movementsUI2);
  });

////////////////////////////////////////////////
/// BANKIST APP
////////////////////////////////////////////////

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////
// Выводим список транзакций в ЛК
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // Если переменная sort = true, мы помещаем в переменную movs отсортированную копию массива movements (оригинальный массив мы не сортируем, так как нам надо сохранить в нем оригинальную последовательность. Для получения копии используем метод slice()).
  // Если sort = false (по умолчанию), тогда в переменную movs мы просто копируем оригинальный массив movements
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

////////////////////////////////////////////////
// Считаем и выводим общий баланс
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

////////////////////////////////////////////////
// Считаем общик суммы транзакций, которая выводится в ЛК
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  // считаем проценты interest (1.2%) на каждую внесенную (deposit) сумму при условии, что банк платит проценты, только если сумма процентов больше 1 EUR
  const iterest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${iterest}€`;
};

////////////////////////////////////////////////
// Создаем имена пользователей (инициалы от полных имен)
// For 'Steven Thomas Williams' username should be 'stw'
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

////////////////////////////////////////////////
/// Обновление интерфейс и пересчет всех сумм в ЛК

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

////////////////////////////////////////////////
// Реализуем механизм ввода логина и пароля
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value))
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

////////////////////////////////////////////////
/// Реализуем перевод средств между аккаунтами Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, recieverAcc);

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur(); // убираем фокус (курсор) из поля ввода суммы

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAcc &&
    recieverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

////////////////////////////////////////////////
/// Запрос займа у банка
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // Займ выдается, только если у пользователя есть положительные транзакции, которые больше, чем 10% от займа
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

////////////////////////////////////////////////
/// Закрытие аккаунта (удаление аккаунта из базы банка)
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

////////////////////////////////////////////////
/// Сортировка
/// (сама сортировка реализована в функции displayMovements)

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
