//  https://www.figma.com/design/fwgYIR4OoE2eC3UGw5ZUWD/Untitled?node-id=0-1&p=f

//  https://openweathermap.org/img/w/01d.png

const APP_ID = "5bcee31d922035d5c6c4672756ec9d88";
const FORM = document.querySelector(".main_weather");
const SEARCH_BTN = document.querySelector("#search_btn");
const CITY_INPUT = document.querySelector("#search_products_input");
const WEATHER_RESULT = document.querySelector("#weather_result");
const LOADING = document.querySelector("#loading");

FORM.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = CITY_INPUT.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  // Очистка и старт загрузки
  WEATHER_RESULT.innerHTML = "";
  LOADING.style.display = "block";
  SEARCH_BTN.disabled = true;

  const INFORMATION_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`;
  // Обработка промисов с помощью async/await
  // Метод fetch возвращает Promise
  // когда мы используем await мы получаем обьект Response - дает общую информацию об ответе, такую как: url, ok, status. А также предоставляет
  // вам методы, для получения данных из body
  // Этот метод называется json()
  // По умолчанию fetch использует метод GET, соответственно его явно прописывать не нужно, Нужно только если вам нужны остальные методы
  const response = await fetch(INFORMATION_WEATHER_URL);

  // Метод json() возвращает Promise и преобразует JSON в JS обьект, чтобы достать дынные из тела ответа используем await
  // В итоге в result в нашем случае у нас будет лежать ответ от сервера в виде JS обьекта
  const result = await response.json();

  // тут  пишем логику по успешному ответу, т.е когда промис имеет статус fulfilled
  if (response.ok) {
    // Извлечь нужные данные
    const { temp, feels_like } = result.main;
    const { icon, description } = result.weather[0];
    const cityName = result.name;
    const country = result.sys.country;

    // Перевести в °C
    const tC = Math.round(temp - 273.15);
    const fC = Math.round(feels_like - 273.15);

    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

    WEATHER_RESULT.innerHTML = `
        <div class="weather-card">
          <div class="info">
            <div class="temp">${tC}°C</div>
            <div class="city">${cityName}, ${country}</div>
          </div>
          <div class="icons">
            <img
              src="http://openweathermap.org/img/w/${icon}.png"
              alt="${description}"
              title="${description}"
            >
          </div>
        </div>
        <div class="feels-card">
          <div class="title">Feels like</div>
          <div class="temp">${fC}°C</div>
        </div>
      `;
  }
  // тут пишем логику по обработку ошибок, т.е когда промис имеет статус rejected
  else {
    WEATHER_RESULT.innerHTML = `
      <div class="error-card">
        <h2>Network Error</h2>
        <p>${err.message}</p>
      </div>
    `;
  }

  // Завершение загрузки
  LOADING.style.display = "none";
  SEARCH_BTN.disabled = false;
});
