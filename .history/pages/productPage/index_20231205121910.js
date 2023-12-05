let form=document.querySelector('form')
let productImg=document.querySelector('.file-input')
let productId=document.querySelector('.product-id-input')
let productName=document.querySelector('.product-name-input')
let productInfo=document.querySelector('.product-info-input')
let productAmount=document.querySelector('.product-amount-input')
let selectedCount =document.querySelector('.form-select')
form.addEventListener('submit',submitForm)

function submitForm(e) {
    e.preventDefault()

}


// mehsulun yaradilmasi
function createProduct() {
    let product={
        img:productImg.value,
        id:productId.value,
        name:productName.value,
        amount:productAmount.value,
        info:productInfo.value,
        count:selectedCount.value

    }
    let database= getDatabase()
    database.push(product)
    localStorage.setItem('products',JSON.stringify(database))

    
}


// databasenin yaradilmasi

function createDatabase() {
    let productArray=[]
    localStorage.setItem('products',JSON.stringify(productArrey))

    
}


// databasenin getirilmesi

function getDatabase() {
    let database=localStorage.getItem('products')
    if (database) {
        return JSON.parse(database)
        
    }

    else{
        createDatabase()
        let database=localStorage.getItem('products')
        return JSON.parse(database)
    }
    
}



