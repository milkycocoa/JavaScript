// Q1 変数
let nickname = 'コダカ';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算
let playerAge = (playerList[0].age + playerList[1].age + playerList[2].age);
let playerAges = (playerAge / 3);
console.log(playerAges);

// Q6 関数
function sayHello() {
  console.log('Hello');
};
sayHello();

const sayWorld = function() {
  console.log('World');
};
sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
};
user.sayHello();

// Q8 引数
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.subtract(15, 5);

calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
};
calc.divide(10, 2);

// Q9 返り値
function remainder (x, y) {
  return (x % y);
};
let A = 5;
let B = 3;
console.log(A + 'を' + B + 'で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);
// xは関数内でしか参照できないローカル変数の為、スコープ外で呼び出すとエラーになる。


// Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2 コールバック関数
function sayHi() {
  console.log('Hello World!');
};
setTimeout(sayHi, 3000);

// Q3 if
let num = 0;
if (0 < num) {
  console.log('num is greater than 0');
} else if (0 > num) {
  console.log('num is less than 0');
} else if (0 === num) {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for (i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    console.log('not number');
  } else if (mixed[i] % 2 === 1) {
    console.log('odd');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  }
}