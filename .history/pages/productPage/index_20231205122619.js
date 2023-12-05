let form = document.querySelector("form");
let productImg = document.querySelector(".file-input");
let productId = document.querySelector(".product-id-input");
let productName = document.querySelector(".product-name-input");
let productInfo = document.querySelector(".product-info-input");
let productAmount = document.querySelector(".product-amount-input");
let selectedCount = document.querySelector(".form-select");
let productExist = false;
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  checkProduct();
}
// mehsulun yoxlanmasi
function checkProduct() {
  let database = getDatabase();
  for (let index = 0; index < database.length; index++) {
    if (database[index].id == productId.value) {
      productExist = true;
      database[index].count=  database[index].count +selectedCount.value
    } else {
      productExist = false;
    }
  }

  if (productExist) {
    localStorage.setItem("products", JSON.stringify(database));

  }
  else{
    cre
  }
}

// mehsulun yaradilmasi
function createProduct() {
  let product = {
    img: productImg.value,
    id: productId.value,
    name: productName.value,
    amount: productAmount.value,
    info: productInfo.value,
    count: selectedCount.value,
  };
  let database = getDatabase();
  database.push(product);
  localStorage.setItem("products", JSON.stringify(database));
}

// databasenin yaradilmasi

function createDatabase() {
  let productArray = [];
  localStorage.setItem("products", JSON.stringify(productArray));
}

// databasenin getirilmesi

function getDatabase() {
  let database = localStorage.getItem("products");
  if (database) {
    return JSON.parse(database);
  } else {
    createDatabase();
    let database = localStorage.getItem("products");
    return JSON.parse(database);
  }
}
