const email = document.getElementById("emailInput");
const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData) || [{ name: "hello", password: "hello" }];
localStorage.setItem("users", JSON.stringify(users));

function addUser() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password.value,
      email: email.value,
      name: names.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function checkIfSame() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let existEmail = data.find((e) => e.email === email.value);
      let existName = data.find((e) => e.name === names.value);

      if (existEmail !== undefined) {
        alert("email already exist girl");
        location.reload();
      } else if (existName !== undefined) {
        alert("name already exist girl");
        location.reload();
      } else {
        addUser();
        alert("Success, Please try to login now");
        window.location.href = "login.html";
        users.push({
          name: names.value,
        });

        localStorage.setItem("users", JSON.stringify(users));
      }
    });
}

function register() {
  if (email.value == 0) {
    alert("fill in email");
  } else if (password.value == 0) {
    alert("fill in password");
  } else {
    checkIfSame();
  }
}

function login() {
  window.location.href = "login.html";
}
