let mainBox = document.querySelector(".image-box");



// elementleri gostermek
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

        <button class="no-fav-btn">
        <img
        class="image-3"
        src="c"
        alt=""
      />
      </button>
      </div>
    </div>
    <h2><span>${element.id}</span> ${element.name}</h2>
    <h3>${element.count}</h3>
    <h4>${element.info}</h4>
    <h5><span>${element.amount}</span>$</h5>
    <button>
Add to cart
    </button>
  </div>
    
    
    `;
  });
}
getData();

// favoriye basmaq
let noFavBtns= document.querySelectorAll('.no-fav-btn')

noFavBtns.forEach((element)=>{
element.addEventListener('click', favFunction)
})
let favAction = false
function favFunction(){
    if(favAction){
noFavBtns.querySelector('img').src='../../assets/image/mdi_cards-heart.svg'
    }
     else{
   noFavBtns.querySelector('img').src= '../../assets/image/mdi_cards-heart.svg'
   favAction =true
     }
}
