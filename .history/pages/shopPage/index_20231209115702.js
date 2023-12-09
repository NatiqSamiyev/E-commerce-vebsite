let mainBox = document.querySelector(".image-box");

function getData() {
  let data = JSON.parse(localStorage.getItem("products"));
  data.forEach((element) => {
    mainBox.innerHTML += `
    <div class="box-container">
    <div class="image-container">
      <img class="image-1" src="${element.img}" alt="" />
      <div class="div-3">
        <div class="icon">
          <img
            class="image-2"
            src="../../assets/image/icon emojione-star.svg"
            alt=""
          />
          <p>4.9</p>
        </div>

        <img
          class="image-3"
          src="../../assets/image/mdi_cards-heart.svg"
          alt=""
        />
      </div>
    </div>
    <h2><span>${element.id}</span> ${element.name}</h2>
    <h3>${element.count}</h3>
    <h4>${element.info}</h4>
    <h5><span>${element.amount}</span>$</h5>
    <button>
>Add to cart</a>
    </button>
  </div>
    
    
    `;
  });
}
getData();
