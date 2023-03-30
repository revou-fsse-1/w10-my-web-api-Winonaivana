const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData) || [{ name: "hello", password: "hello" }];
localStorage.setItem("users", JSON.stringify(users));

function validate() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let existName = data.find((e) => e.name === names.value);
      let existPass = data.find((e) => e.password === password.value);

      if (existName === undefined || existPass === undefined) {
        alert("Invalid");
      } else if (existName !== existPass) {
        alert("Invalid");
      } else {
        alert("yay");
        window.location.href = "index.html";
        users.push({
          name: names.value,
          password: password.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
      }
    });
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
