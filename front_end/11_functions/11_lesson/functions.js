// Задание 1
// Напишите функцию, которая принимает два числа и возвращает большее значение.
// Вызов функции присвоить переменной и отобразить результат(переменную) в консоле

function bigNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

let result = bigNumber(7, 6);
console.log(result);

// Задание 2
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.

let array = ["car", "auto", "train"];
let number = 2;
const arrayNumber = (array, number) => array[number];
let result = arrayNumber(array, number);
console.log(result);

// Задание 3
// Создайте функцию, которая бы принимала следующие параметры:
// код погоды и функцию decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.

// Таблица соответствия код-описание:
// SQ – шквал
// PO – пыльный вихрь
// FC - торнадо
// BR – дымка (видимость от 1 до 9 км)
// HZ – мгла (видимость менее 10 км)
// FU – дым (видимость менее 10 км)
// DS - пыльная буря (видимость менее 10 км)
// SS - песчаная буря (видимость менее 10 км)
//
// Подсказка: удобно использовать в одном из методов switch-case

const decode = (code) => {
  switch (code) {
    case "SQ":
      return "шквал";
    case "PO":
      return "пыльный вихрь";
    case "FC":
      return "торнадо";
    case "BR":
      return "дымка (видимость от 1 до 9 км)";
    case "HZ":
      return "мгла (видимость менее 10 км)";
    case "FU":
      return "дым (видимость менее 10 км)";
    case "DS":
      return "пыльная буря (видимость менее 10 км)";
    case "SS":
      return "песчаная буря (видимость менее 10 км)";
    default:
      return "Неизвестный код погоды";
  }
};

const weather = (code, decodeFn) => decodeFn(code);

let result = weather("SQ", decode);
console.log(result);
