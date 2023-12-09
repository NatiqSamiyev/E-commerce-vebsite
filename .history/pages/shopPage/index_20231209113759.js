let mainBox = document.querySelector('.image-box')




function getData(){
    let data = JSON.parse( localStorage.getItem('products'))
 console.log(data);
data.forEach(element => {
    mainBox.innerHTML+=
    `
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
    <h3>say</h3>
    <h4>info</h4>
    <h5><span>99</span>$</h5>
    <button>
      <a href="#">Add to cart</a>
    </button>
  </div>
    
    
    `
});
}
getData()