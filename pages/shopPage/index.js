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
        <button class="delet-btn">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
 </button>

         <button class="no-fav-btn">
         <img
         class="image-3"
        src="../../assets/image/mdi_cards-heart-outline.svg"
         alt=""
      />
       </button>
       </div>
     </div>
     <h2><span>${element.id}</span> ${element.name}</h2>
    <h3>${element.count}</h3>
    <h4>${element.info}</h4>
    <h5><span>${element.amount}</span>$</h5>
     <button class="submit-btn">
 Add to cart
    </button>
 </div>
    
    
   `;
  });
}
getData();

// favoriye basmaq
// let noFavBtns = document.querySelectorAll(".no-fav-btn");

// noFavBtns.forEach((element) => {
//   element.addEventListener("click", () => favFunction(element));
// });

// let favAction = false;

// function favFunction(element) {
//   if (favAction) {
//     element.querySelector("img").src =
//       "../../assets/image/mdi_cards-heart-outline.svg";
//     favAction = false;
//   } else {
//     element.querySelector("img").src = "../../assets/image/mdi_cards-heart.svg";
//     favAction = true;
//   }
// }

let noFavBtns = document.querySelectorAll(".no-fav-btn");
noFavBtns.forEach((element) => {
  element.addEventListener("click", () => favFunction(element));
});

let favAction = false;

function favFunction(element) {
  if (favAction) {
    element.querySelector("img").src =
      "../../assets/image/mdi_cards-heart-outline.svg";
    favAction = false;
  } else {
    element.querySelector("img").src = "../../assets/image/mdi_cards-heart.svg";
    favAction = true;
  }
}
