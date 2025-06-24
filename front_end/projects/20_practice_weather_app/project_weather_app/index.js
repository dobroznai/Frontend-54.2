const APP_ID = "7a468792baca588c9e06d5c71ea2f3d1";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

const form = document.querySelector(".main_weather");
const input = document.getElementById("search_products_input");
const button = document.getElementById("search_btn");
const loading = document.getElementById("loading");
const result = document.getElementById("weather_result");

// Обработчик клика «Search»
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = input.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  // Показать загрузку, очистить прошлый результат
  button.disabled = true;
  loading.style.display = "block";
  result.innerHTML = "";

  try {
    // Запрос к API
    const res = await fetch(
      `${WEATHER_URL}?q=${encodeURIComponent(city)}&appid=${APP_ID}`
    );
    const data = await res.json();

    if (res.ok) {
      // Извлечь нужные данные
      const { temp, feels_like } = data.main;
      const { icon, description } = data.weather[0];
      const cityName = data.name;
      const country = data.sys.country;

      // Перевести в °C
      const tC = Math.round(temp - 273.15);
      const fC = Math.round(feels_like - 273.15);

      // Построить HTML
      result.innerHTML = `
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
    } else {
      // Ошибка API
      result.innerHTML = `
        <div class="error-card">
          <h2>API Error</h2>
          <p>${data.cod}: ${data.message}</p>
        </div>
      `;
    }
  } catch (err) {
    // Сетевая или другая ошибка
    result.innerHTML = `
      <div class="error-card">
        <h2>Network Error</h2>
        <p>${err.message}</p>
      </div>
    `;
  } finally {
    // Скрыть загрузку, разблокировать кнопку
    loading.style.display = "none";
    button.disabled = false;
  }
});
