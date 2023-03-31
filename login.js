const names = document.getElementById("nameInput");
const password = document.getElementById("passwordInput");
const url = "https://6421b41286992901b2ba38ac.mockapi.io/users/";

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData);
localStorage.setItem("users", JSON.stringify(users));

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

function validate1() {
  fetch(url)
    .then((response) => response.json())
    .then((user) => {
      let existEmail = user.find((e) => e.name === names.value);
      let existPassword = user.find((e) => e.password === password.value);
    });

  if (existEmail === undefined || existPassword === undefined) {
    alert("invalid");
  } else if (existEmail !== existPassword) {
    alert("invalid");
  } else {
    alert("success");
  }
}

function checkIfSame() {
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
      } else {
        alert("Success");
        window.location.href = "index.html";
        users.push({
          name: names.value,
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
    checkIfSame();
  }
}

function login() {
  checkEmpty();
}

function signup() {
  window.location.href = "register.html";
}
