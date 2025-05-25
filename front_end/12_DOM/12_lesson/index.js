const element = document.querySelector("button");
element.addEventListener("click", getData);

const resultId = document.getElementById("result");

function getData(event) {
  event.preventDefault();

  const form = document.querySelector(".user-form");

  let userHeight = form.elements["user-height"].value;
  let userGender = form.elements["user-gender"].value;
  let height = Number(userHeight);

  result(userGender, height);
}

function checkingData(height, userGender) {
  if (
    userGender === null ||
    userGender === undefined ||
    userGender === "" ||
    isNaN(height)
  ) {
    return false;
  }
  if (height <= 100) {
    resultId.textContent = "Введите больше 100 см рост";
    return false;
  }
  return true;
}

function result(userGender, height) {
  if (checkingData(height, userGender)) {
    let idealWeight;
    if (userGender === "Male") {
      idealWeight = height - (100 + (height - 100) / 10);
      resultId.textContent =
        "Идеальный вес (мужчина): " + idealWeight.toFixed(3) + " кг";
    } else {
      idealWeight = height - (100 + (height - 100) / 20);
      resultId.textContent =
        "Идеальный вес (женщина): " + idealWeight.toFixed(3) + " кг";
    }
  } else {
    resultId.textContent = "Введите верные данные";
  }
}
