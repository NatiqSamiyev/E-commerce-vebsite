let showBtn = document.querySelector(".show-btn");
let hidebtn = document.querySelector(".hide-btn");
let passwordInput = document.querySelector('input[type="password"]');
let emailinput = document.querySelector(".email-input");
let form = document.querySelector("form");
let errorMsj = document.querySelector(".error-msj");
let userExist =false
// parol gizletmek
hidebtn.addEventListener("click", showPassword);
function showPassword() {
  passwordInput.type = "text";
  hidebtn.style.display = "none";
  showBtn.style.display = "block";
}
// parolu gostermek
showBtn.addEventListener("click", hidePassword);
function hidePassword() {
  passwordInput.type = "password";
  hidebtn.style.display = "block";
  showBtn.style.display = "none";
}
// form submit olmasi
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  checkUser();
}

// useri yoxlamaq
function checkUser() {
  let user = {
    id: Date.now(),
    email: emailinput.value,
    password: passwordInput.value,
  };
  let database = getDatabase();
  for (let index = 0; index < database.length; index++) {
    if (database[index].id == user.id) {
      errorMsj.style.display = "block";
      userExist=true
    } else {
      createUser(user)
    }
  }
}
// user yaratmaq
function createUser(user) {
  let database = getDatabase();
  database.push(user);
  localStorage.setItem("users", JSON.stringify(database));
}

// databaseni getirmek
function getDatabase(params) {
  let database = JSON.parse(localStorage.getItem("users"));
  if (database) {
    return database;
  } else {
    createDatabase();
    let database = JSON.parse(localStorage.getItem("users"));
    return database;
  }
}

// database yaratmaq
function createDatabase() {
  let usersArrey = [];
  localStorage.setItem("users", JSON.stringify(usersArrey));
}
