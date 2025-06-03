const products = [
  {
    id: 1,
    type: "Jeans",
    gender: "men",
    price: 250,
    status: "In stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/LV04RB737G_B7I_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: 220,
    status: "In stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J20J225134_1A4_alternate1?wid=600&fmt=jpeg&qlt=100%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",

  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: 270,
    status: "In stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/LV04RB948G_R6R_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: 230,
    status: "Out of stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/LV047B913G_YCC_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: 800,
    status: "In stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/K10K114172_PCP_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: 700,
    status: "In stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/LV047AB802_VDW_alternate1?wid=600&fmt=jpeg&qlt=100%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: 900,
    status: "In stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/LV04LB275G_CIQ_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: 750,
    status: "Out of stock",
    imgUrl: "https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/LV047AB802_CFM_alternate3?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: 400,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: 350,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: 420,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: 370,
    status: "Out of stock",
    imgUrl: "some_URL",
  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: 180,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: 160,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: 200,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: 170,
    status: "Out of stock",
    imgUrl: "some_URL",
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: 260,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: 240,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: 280,
    status: "Out of stock",
    imgUrl: "some_URL",
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: 250,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: 850,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: 720,
    status: "Out of stock",
    imgUrl: "some_URL",
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: 920,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: 780,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: 410,
    status: "Out of stock",
    imgUrl: "some_URL",
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: 360,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: 430,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: 380,
    status: "Out of stock",
    imgUrl: "some_URL",
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: 190,
    status: "In stock",
    imgUrl: "some_URL",
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: 175,
    status: "In stock",
    imgUrl: "some_URL",
  },
];




const CARDS_CONTAINER = document.querySelector(".cards_container");

function createProductCard(product) {
 const CARD = document.createElement("div");
    CARD.classList.add("card")
       CARD.innerHTML =
       `
       <img class = "image_card" src="${product.imgUrl}" alt="${product.type}">
       <div class="content_card">
       <h2>${product.type}</h2>
       <p>${product.price} $</p>
       <p>${product.gender}</p>
       <div class="status">${product.status}</div>
       </div>
       `;
      return CARD;
}

products.forEach(product =>{
  const productCard = createProductCard(product);
  CARDS_CONTAINER.appendChild(productCard)
});

