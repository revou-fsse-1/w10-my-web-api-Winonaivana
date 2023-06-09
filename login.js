const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData);
localStorage.setItem("users", JSON.stringify(users));

function checkIfSame() {
  const check = users.find((a) => a.name === names.value);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let existName = data.find((e) => e.name === names.value);
      let existPassword = data.find((e) => e.password === password.value);

      if (existName === undefined || existPassword === undefined) {
        alert("invalid");
        location.reload();
      } else if (existName !== existPassword) {
        alert("invalid");
      } else if (existName !== undefined && check === undefined) {
        users.push({
          name: names.value,
        });

        localStorage.setItem("users", JSON.stringify(users));
      } else {
        alert("Success");
        window.location.href = "index.html";
      }
    });
}

function checkEmpty() {
  if (names.value == 0) {
    alert("Please fill in email");
  } else if (password.value == 0) {
    alert("Please fill in password");
  } else {
    checkIfSame();
  }
}

function login() {
  checkEmpty();
}

function signup() {
  window.location.href = "register.html";
}
