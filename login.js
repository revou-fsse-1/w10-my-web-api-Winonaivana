const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

function validate() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let existEmail = data.find((e) => e.name === names.value);
      let existPass = data.find((e) => e.password === password.value);

      if (existEmail === undefined || existPass === undefined) {
        alert("Invalid");
      } else if (existEmail !== existPass) {
        alert("Invalid");
      } else {
        alert("yay");
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
    validate();
  }
}

function login() {
  checkEmpty();
}
