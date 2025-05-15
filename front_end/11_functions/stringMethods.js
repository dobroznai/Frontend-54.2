let fullName = " John Johnson ";
// 1. length - длина строки
console.log(fullName.length);

// 2. toUpperCase() - метод который преобразует строку в верхний регистр
console.log(fullName.toUpperCase());
console.log(fullName);

// 3. toLowerCase() - метод который преобразует строку в нижний регистр
console.log(fullName.toLowerCase());
console.log(fullName);

// 4. trim() - удаляет пробелы в начале и в конце строки
console.log(fullName);
console.log(fullName.trim());

// 5. substring() -метод, который возвращает нужную нам часть строки
let firstName = fullName.substring(0, 5); // указывем начало и конец
let lastname = fullName.substring(5, 12);
console.log(firstName);
console.log(lastname);

// 6. split
console.log(fullName.split("n"));
