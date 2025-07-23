// Создание и подключение к БД cohort_54_lesson_04
use("cohort_54_lesson_05");

// Создание одной записи
// db.students.insertOne({
//   firstName: "John",
//   last_name: "Johnson",
//   age: 45,
//   course: "QA",
//   group: 60,
// });

// создание нескольких записей
db.animals.insertMany([
  { kind: "tiger", weight: 300, name: "Alan", predatory: true },
  { kind: "penguin", weight: 2, name: "Kovalsky", predatory: true },
  { kind: "chicken", weight: 1, name: "Cipa", predatory: false },
  { kind: "shark", weight: 400, name: "Sharp", predatory: false },
  { kind: "shark", weight: 450, name: "John", predatory: false },
  { kind: "panda", weight: 200, name: "Po", predatory: false },
]);
