let showBtn =document.querySelector('.show-btn')
let hidebtn =document.querySelector('.hide-btn')
let passwordInput= document.querySelector('input[type="password"]')
hidebtn.addEventListener('click', showPassword)
function showPassword(){
console.log('jhygtrfedsw');
passwordInput.type='text'
hidebtn.style.display ='none'
showBtn.style.display ='none'

}

showBtn.addEventListener('click', hidePassword)
function hidePassword(){

passwordInput.type='password'
}