let temperature = prompt(
  "Пожалуйста, введите температуру воздуха в вашем городе:"
);

let normalizedTemperature = Number(temperature); // преобразование в тип number

// console.log(temperature);
// console.log(normalizedTemperature);
// console.log(isNaN(normalizedTemperature));

if (temperature !== null) {
  if (!isNaN(normalizedTemperature) && temperature !== "") {
    if (normalizedTemperature < 0) {
      console.log("Холодно");
    } else if (normalizedTemperature >= 0 && normalizedTemperature <= 20) {
      console.log("Прохладно");
    } else if (normalizedTemperature > 20 && normalizedTemperature <= 30) {
      console.log("Тепло");
    } else if (normalizedTemperature > 30) {
      console.log("Жарко");
    }
  } else {
    console.log(
      "Вы ввели некорректные символы или не ввели ничего, перезагрузите страницу и введите число"
    );
  }
} else {
  // если пользователь нажал отмена
  console.log(
    "Вы отказались вводить данные, перезагрузите страницу и попробуйте еще раз!!!"
  );
}
