let showBtn = document.querySelector(".show-btn");
let hidebtn = document.querySelector(".hide-btn");
let passwordInput = document.querySelector('input[type="password"]');
let emailinput = document.querySelector(".email-input");
let form = document.querySelector("form");

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
form submit olmasi
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  createUser();
}

// user yaratmaq
function createUser(params) {
  let user = {
    id: Date.now(),
    email: emailinput.value,
    password: passwordInput.value,
  };
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
