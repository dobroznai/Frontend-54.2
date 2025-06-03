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
const CARDS_CONTAINER = document.getElementById("productContainer");
const TYPE_SELECT = document.getElementById("typeFilter");
const GENDER_SELECT = document.getElementById("genderFilter");
const STATUS_SELECT = document.getElementById("statusFilter");
const PRISE_SELECT = document.getElementById("priceFilter");

// Создание одной карточки товара
function createCard(product) {
  const CARD = document.createElement("div");
  CARD.classList.add("card");
  CARD.innerHTML = `
    <img class="card_img" src="${product.imgUrl}" alt="${product.type}">
    <h3>${product.type}</h3>
    <p>${product.price} $</p>
    <p>${product.gender}</p>
    <div class="card_status">${product.status}</div>
  `;
  return CARD;
}

// Отображение товаров в контейнере
function displayProducts(products) {
  CARDS_CONTAINER.innerHTML = "";
  if (products.length === 0) {
    CARDS_CONTAINER.innerHTML = "<p>Нет товаров по фильтру.</p>";
    return;
  }

  products.forEach((product) => {
    const card = createCard(product);
    CARDS_CONTAINER.appendChild(card);
  });
}

// Фильтрация товаров по выбранным фильтрам
function filterProducts() {
  const type = TYPE_SELECT.value;
  const gender = GENDER_SELECT.value;
  const status = STATUS_SELECT.value;

  const filtered = products.filter((p) => {
    return (
      (type === "Default" || p.type === type) &&
      (gender === "Default" || p.gender === gender) &&
      (status === "Default" || p.status === status)
    );
  });

  displayProducts(filtered);
}

// Слушатели событий на фильтры
TYPE_SELECT.addEventListener("change", filterProducts);
GENDER_SELECT.addEventListener("change", filterProducts);
STATUS_SELECT.addEventListener("change", filterProducts);

// Начальное отображение всех товаров
displayProducts(products);

//////////////////////////////////////////////////////////////////
//Отображение количества карточек на экране
function updateProductCount(count) {
  document.getElementById(
    "productCount"
  ).textContent = `Products Found (${count})`;
}
1;
// Инициализация
updateProductCount(products.length);

// /////////////////////////////////////////////////////////////////
// //Отображение количества карточек на экране после фильтра
function filterProducts() {
  const type = document.getElementById("typeFilter").value;
  const gender = document.getElementById("genderFilter").value;
  const price = document.getElementById("priceFilter").value;
  const status = document.getElementById("statusFilter").value;

  const filtered = products.filter((product) => {
    let match = true;

    if (TYPE_SELECT !== "Default" && product.type !== type) match = false;
    if (GENDER_SELECT !== "Default" && product.gender !== gender) match = false;

    if (PRISE_SELECT !== "Default") {
      const [min, max] =
        PRISE_SELECT === "From 601"
          ? [601, Infinity]
          : PRISE_SELECT.split("-").map(Number);
      if (product.price < min || product.price > max) match = false;
    }
    if (STATUS_SELECT !== "Default" && product.status !== status) match = false;

    return match;
  });

  updateProductCount(filtered.length);
}

document.getElementById("allFilters").addEventListener("submit", function (e) {
  e.preventDefault();
  filterProducts();
});

document.getElementById("allFilters").addEventListener("reset", function () {
  setTimeout(() => {
    updateProductCount(products.length);
  }, 0);
});

////////////////////////////////////////////////////////////////
//Кнопка Scroll Up To Filters

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
