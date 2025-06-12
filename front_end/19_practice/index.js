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
      cardElement.style.backgroundColor =
        avg > 4.8 ? "lightgreen" : "lightblue";

      const wineryElement = document.createElement("p");
      wineryElement.className = "winery";
      wineryElement.textContent = winery;

      const wineElement = document.createElement("p");
      wineElement.className = "wine";
      wineElement.textContent = wine;

      const avgElement = document.createElement("p");
      avgElement.className = "rating";
      avgElement.textContent = avg;

      const imgElement = document.createElement("img");
      imgElement.className = "wine";
      imgElement.src = image;
      imgElement.alt = wine;

      cardElement.append(imgElement, wineryElement, wineElement, avgElement);
      wineContainerElement.append(cardElement);
    });
}
loadWine();
