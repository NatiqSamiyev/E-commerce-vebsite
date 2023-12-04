let form = document.querySelector("form");
let label = document.querySelector(".label");
let inputType = document.querySelector('input[type="password"]');
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let loginBtn = document.querySelector(".login");
let email = document.querySelector(".email-input");
let password = document.querySelector(".password");
let userExist = false;
btn2.addEventListener("click", checkBtn2);
function checkBtn2() {
  inputType.type = "text";
  btn2.style.display = "none";
  btn1.style.display = "block";
}

btn1.addEventListener("click", checkBtn1);
function checkBtn1() {
  inputType.type = "password";
  btn2.style.display = "block";
  btn1.style.display = "none";
}

form.addEventListener("submit", submitForm);
function submitForm(a) {
  a.preventDefault();
  // createUser()
  getDatabase();
}

function getDatabase() {
  let database = JSON.parse(localStorage.getItem("users"));
  for (let index = 0; index < database.length; index++) {
    if (
      database[index].email == email.value &&
      database[index].password == password.value
    ) {
      userExist = true;
      break;
    } else {
      userExist = false;
    }
  }
  console.log();
}

// function createUser() {
//     let user={
//         id:Date.now(),
//         email:email.value,
//         password:inputType.value,
//     };
//     let database = getDatabase();
//     database.push(user)
//     localStorage.setItem('user',JSON.stringify(database))

// }

// function getDatabase() {
//     let database=JSON.parse(localStorage.getItem(database))
//     if (database) {
//         return database;
//     }
//     else{
//         createDatabase();
//         let database=JSON.parse(localStorage.getItem(database))
//         return database;
//     }

// }

// function createDatabase() {
//     let usersArrey=[]
//     localStorage.setItem('users',JSON.stringify(usersArrey))

// }
