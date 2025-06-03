const products = [
  {
    id: 1,
    type: "Jeans",
    gender: "men",
    price: 250,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_1",
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: 220,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_2",
  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: 270,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_3",
  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: 230,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_4",
  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: 800,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_5",
  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: 700,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_6",
  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: 900,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_7",
  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: 750,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_8",
  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: 400,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_9",
  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: 350,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_10",
  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: 420,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_11",
  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: 370,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_12",
  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: 180,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_13",
  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: 160,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_14",
  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: 200,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_15",
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: 170,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_16",
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: 260,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_17",
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: 240,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_18",
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: 280,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_19",
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: 250,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_20",
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: 850,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_21",
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: 720,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_22",
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: 920,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_23",
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: 780,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_24",
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: 410,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_25",
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: 360,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_26",
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: 430,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_27",
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: 380,
    status: "Out of stock",
    imgUrl: "https://placehold.co/300x300?text=img_28",
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: 190,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_29",
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: 175,
    status: "In stock",
    imgUrl: "https://placehold.co/300x300?text=img_30",
  },
];

///////////////////////////////////////////////////////////////////
// Функция для отображения количества товаров
function updateProductCount(count) {
  const countElement = document.getElementById("productCount");
  countElement.textContent = `Products Found (${count}) `;
}

// Функция для проверки цены
function checkPrice(productPrice, filterValue) {
  if (filterValue === "Default") return true;

  if (filterValue === "0-300") return productPrice <= 300;
  if (filterValue === "301-600")
    return productPrice > 300 && productPrice <= 600;
  if (filterValue === "From 601") return productPrice > 600;

  return true;
}

// Основная функция фильтрации
function filterProducts() {
  const typeValue = document.getElementById("typeFilter").value;
  const genderValue = document.getElementById("genderFilter").value;
  const priceValue = document.getElementById("priceFilter").value;
  const statusValue = document.getElementById("statusFilter").value;

  const filteredProducts = products.filter((product) => {
    const typeMatch = typeValue === "Default" || product.type === typeValue;
    const genderMatch =
      genderValue === "Default" || product.gender === genderValue;
    const priceMatch = checkPrice(product.price, priceValue);
    const statusMatch =
      statusValue === "Default" || product.status === statusValue;

    return typeMatch && genderMatch && priceMatch && statusMatch;
  });

  createCard(filteredProducts);
  updateProductCount(filteredProducts.length);
}

// Функция для отображения товаров
function createCard(productsToRender) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  productsToRender.forEach((product) => {
    const CARD = document.createElement("div");
    CARD.className = "card";
    CARD.innerHTML = `
        <img class="card_img" src="${product.imgUrl}" alt="${product.type}">
    <h3>${product.type}</h3>
    <p>${product.price} $</p>
    <p>${product.gender}</p>
    <div class="card_status">${product.status}</div>
  `;
    container.appendChild(CARD);
  });
}

// Обработчики событий
document
  .getElementById("productSearchButton")
  .addEventListener("click", (e) => {
    e.preventDefault();
    filterProducts();
  });

document.getElementById("productClearButton").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("allFilters").reset();
  filterProducts(); // После сбрасывания фильтров показываем все товары
});

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  createCard(products);
  updateProductCount(products.length);
});

////////////////////////////////////////////////////////////////

// Получаем кнопку
const scrollToTopFilters = document.getElementById("scrollToFiltersBtn");
// Показывать кнопку при прокрутке вниз на 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopFilters.style.display = "block";
  } else {
    scrollToTopFilters.style.display = "none";
  }
};
// При нажатии на кнопку возвращаемся наверх
scrollToTopFilters.addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавный скролл
  });
});
