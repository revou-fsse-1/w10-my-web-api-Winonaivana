const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData);

function validate() {
  const check = users.find(
    (a) => a.name === names.value && a.password === password.value
  );
  if (check === undefined) {
    alert("Please sign up");
    location.reload();
  } else {
    alert("Login successful");
    window.location.href = "index.html";
  }
}

function checkEmpty() {
  if (names.value == 0) {
    alert("Please fill in email");
  } else if (password.value == 0) {
    alert("Please fill in password");
  } else {
    validate();
  }
}

function login() {
  checkEmpty();
}

function signup() {
  window.location.href = "register.html";
}
