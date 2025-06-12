const wineContainerElement = document.querySelector(".container");

async function loadWine() {
  const res = await fetch("https://api.sampleapis.com/wines/whites");
  const wines = await res.json();
  wines
    .filter((wineItem) => wineItem.rating && wineItem.rating.average >= 4.8)
    .forEach((wineItem) => {
      const { winery, wine, rating, image } = wineItem;
      const cardElement = document.createElement("div");
      cardElement.className = "card";

      const avg = rating.average;
      if (avg >= 4.9) {
        cardElement.style.backgroundColor = "lightgreen";
      } else if (avg >= 4.8) {
        cardElement.style.backgroundColor = "lightblue";
      }

      const wineryElement = document.createElement("div");
      wineryElement.className = "winery";
      wineryElement.textContent = winery;

      const wineElement = document.createElement("div");
      wineElement.className = "wine";
      wineElement.textContent = wine;

      const avgElement = document.createElement("div");
      avgElement.className = "rating";
      avgElement.textContent = avg;

      const imgElement = document.createElement("img");
      imgElement.className = "wine";
      imgElement.src = image;

      cardElement.append(imgElement, wineryElement, wineElement, avgElement);
      wineContainerElement.append(cardElement);
    });
}
loadWine();
