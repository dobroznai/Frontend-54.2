const products = [
  {
    id: 1,
    type: "Jeans",
    gender: "men",
    price: 250,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_1.png",
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: 220,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_2.png",
  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: 270,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_3.png",
  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: 230,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_4.png",
  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: 800,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_5.png",
  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: 700,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_6.png",
  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: 900,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_7.png",
  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: 750,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_8.png",
  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: 400,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_9.png",
  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: 350,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_10.png",
  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: 420,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_11.png",
  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: 370,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_12.png",
  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: 180,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_13.png",
  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: 160,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_14.png",
  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: 200,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_15.png",
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: 170,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_16.png",
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: 260,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_17.png",
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: 240,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_18.png",
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: 280,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_19.png",
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: 250,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_20.png",
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: 850,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_21.png",
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: 720,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_22.png",
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: 920,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_23.png",
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: 780,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_24.png",
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: 410,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_25.png",
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: 360,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_26.png",
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: 430,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_27.png",
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: 380,
    status: "Out of stock",
    imgUrl: "./assets/card_imgs/img_28.png",
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: 190,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_29.png",
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: 175,
    status: "In stock",
    imgUrl: "./assets/card_imgs/img_30.png",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CONTAINER = document.querySelector("#productContainer");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TYPE_VALUE = document.querySelector("#typeFilter").value;
const GENDER_VALUE = document.querySelector("#genderFilter").value;
const PRICE_VALUE = document.querySelector("#priceFilter").value;
const STATUS_VALUE = document.querySelector("#statusFilter").value;
const COUNT_ELEMENT = document.querySelector("#productCount").value;

const CLEAN_BUTTON = document.querySelector("#productClearButton");
const SEARCH_BUTTON = document.querySelector("#productSearchButton");
const RESET_BUTTON = document.querySelector("#allFilters");
const SCROLL_BUTTON = document.querySelector("#scrollToFiltersBtn");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Функция для отображения товаров
function createCard(productsToRender) {
  CONTAINER.innerHTML = ""; //clear script

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
    CONTAINER.append(CARD);
  });
}

// Функция для отображения количества товаров
function updateProductCount(count) {
  COUNT_ELEMENT.textContent = `Products Found (${count}) `;
}

// Функция для проверки цены
function checkPrice(productPrice, filterValue) {
  if (filterValue === "ALL") return true;

  if (filterValue === "0-300") return productPrice <= 300;
  if (filterValue === "301-600")
    return productPrice > 300 && productPrice <= 600;
  if (filterValue === "From 601") return productPrice > 600;

  return true;
}

// Основная функция фильтрации
function filterProducts() {
  const filteredProducts = products.filter((product) => {
    const typeMatch = TYPE_VALUE === "All" || product.type === TYPE_VALUE;
    const genderMatch = GENDER_VALUE === "All" || product.gender === GENDER_VALUE;
    const priceMatch = checkPrice(product.price, PRICE_VALUE);
    const statusMatch = STATUS_VALUE === "All" || product.status === STATUS_VALUE;

    return typeMatch && genderMatch && priceMatch && statusMatch;
  });

  createCard(filteredProducts);
  updateProductCount(filteredProducts.length);
}

// Обработчики событий

SEARCH_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  filterProducts();
});

CLEAN_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  RESET_BUTTON.reset();
  filterProducts(); // После сбрасывания фильтров показываем все товары
});

// Инициализация при загрузке страницы
// document.addEventListener("DOMContentLoaded", () => {
//     createCard(products);
//     updateProductCount(products.length);
// });

////////////////////////////////////////////////////////////////

// Показывать кнопку при прокрутке вниз на 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    SCROLL_BUTTON.style.display = "block";
  } else {
    SCROLL_BUTTON.style.display = "none";
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
