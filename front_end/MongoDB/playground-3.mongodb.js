// Создание и подключение к БД cohort_54_lesson_05
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
// db.animals.insertMany([
//  {kind: "tiger", weight: 300, name: "Alan", predatory: true},
//  {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
//  {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
//  {kind: "shark", weight: 400, name: "Sharp", predatory: false},
//  {kind: "shark", weight: 450, name: "John", predatory: false},
//  {kind: "panda", weight: 200, name: "Po", predatory: false},
// ]);

// UPDATE
// 1. $set
// - изменим predotary у всех акул на true
// db.animals.updateMany({ kind: "shark" }, { $set: { predatory: true } });

// 2. $inc - увеличивает значения на указанную величину
// db.animals.updateMany({}, { $inc: { weight: 3 } });

// 3. $rename - переименовывает ключи
// db.animals.updateMany({}, { $rename: { weight: "weightKg" } });

// 4. Добавление нового св-ва с помощью $set
// db.animals.updateMany(
//   { predatory: true },
//   { $set: { food: ["fish", "squid"] } }
// );

// 5. $push - добавляет в массив новый элемент
// db.animals.updateOne(
//   { kind: "tiger" },
//   {
//     $push: { food: "wolf" },
//   }
// );

// 6. $unset - удаление св-ва и значения обьекта
// db.animals.updateOne({ kind: "chicken" }, { $unset: { predatory: "" } });

// 7. Изменение по id
// db.animals.updateOne(
//   { _id: ObjectId("67ae3b67fe39a781640d091d") },
//   { $set: { name: "Kovalsky 2" } }
// );

//////////////////////////////////////////////////////////////////////////
// DELETE
// 1. deleteOne()
// db.animals.deleteOne({ _id: ObjectId("") });

// 2. deleteMany() - удаление нескольких элементов
// db.animals.insertMany([
//   {
//     kind: "t-rex",
//     weightKg: 1500,
//   },
//   {
//     kind: "t-rex",
//     weightKg: 1800,
//   },
// ]);

// db.animals.deleteMany({ kind: "t-rex" });

/////////////////////////////////////////////////////////////////////////////
// AGGREGATION
// 1. $match - находит все по совпрадению
// db.animals.aggregate([
//   {
//     $match: {
//       predatory: true,
//     },
//   },
// ]);

// db.animals.aggregate([
//   {
//     $match: {
//       predatory: true,
//     },
//   },
//   { $sort: { weightKg: -1 } },
//   { $skip: 2 },
//   { $limit: 1 },
// ]);

// - $project - проекция указывает какие поля получать, а какие нет
// db.animals.aggregate([
//   {
//     $project: {
//       name: 1,
//       food: 1,
//       _id: 0,
//     },
//   },
// ]);

// - $count - считает сколько получено документов
// Значением $count является имя св-ва в котором будет отражено колл-во документов в записи
// db.animals.aggregate([
//   {
//     $match: {
//       predatory: false,
//     },
//   },
//   { $count: "number_of_planteaters" },
// ]);

// - $sample - получает случайный документ
// db.animals.aggregate([
//   {
//     $sample: {
//       size: 1,
//     },
//   },
// ]);

// Задача: показать случайное животное с весом более 100kg
// db.animals.aggregate([
//   {
//     $match: {
//       weightKg: {
//         $gt: 100
//       }
//     }
//   },
//   {
//     $sample: {
//       size: 1
//     }
//   }
// ]);

// - $group
// db.kids.insertMany([
//   { name: "John", age: 5, gender: "boy" },
//   { name: "Anna", age: 6, gender: "girl" },
//   { name: "Leyla", age: 4, gender: "girl" },
//   { name: "Frieda", age: 3, gender: "boy" },
//   { name: "Bob", age: 5, gender: "boy" },
// ]);

// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       averageAge: {
//         $avg: "$age",
//       },
//     },
//   },
// ]);

db.animals.find();
