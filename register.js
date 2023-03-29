const email = document.getElementById("emailInput");
const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

function addUser() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password.value,
      email: email.value,
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

      if (existEmail !== undefined) {
        alert("email already exist girl");
        location.reload();
      } else {
        addUser();
        alert("Success, Please try to login now");
        window.location.href = "login.html";
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
  window.location.href("login.html");
}
