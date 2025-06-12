fetch(" https://dobroznai.github.io/countries.json/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка загрузки:", error));
