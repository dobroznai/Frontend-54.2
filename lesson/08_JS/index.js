console.log("Hello world!");

// переменные
// let - изменяемая переменная
let message;
// присваивание значения
message = "New message";
console.log(message);

message = "Hello";
console.log(message);

// const - неизменяемая переменная

const firstName = "John";
console.log(firstName);
// ошыбка
// firstName = 'Mary';
// console.log(firstName);

// Типы переменных
// примитивы - простые
// 1. Строка - string
let someName = "Tom";
console.log(age);

// 2. Числовое - number
let age = 23;
age = -20;
age = 20.5;
age = Infinity;
// ошыбка в вычыслениях
age = NaN;
console.log(age);

// 3. Большое число - bigint
let bigNum = 198267398273891789378927128937n;
console.log(bigNum);

// 4. Лолический тип - boolean
let isAdminTrue = true;
let isAdminFalse = false;
console.log(isAdminFalse);
console.log(isAdminTrue);

// 5. Неопределенный тип - underfined
let animal = undefined;
console.log(animal);

// 6. Пустое значение - null

let value = null;
console.log(value);
// 7. Символ - symbol (появился в JS 6 версии, используют нечасто)
let id = Symbol();
console.log(id);

// 8. Обьекты - object (пары ключ/значение) - сложный тип, сложная структура данных
let person = {
  name: "Bob",
  age: 34,
};

// изминение значения переменной
value = 100;
console.log(value);
