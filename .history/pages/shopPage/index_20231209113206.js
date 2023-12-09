let mainBox = document.querySelector('.image-box')











function getData(){
    let data = JSON.parse( localStorage.getItem('products'))
    console.log(data);
}
getData()