const url = "https://6421b41286992901b2ba38ac.mockapi.io/postList/";
const url2 = "https://6421b41286992901b2ba38ac.mockapi.io/users/";
const postsList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
const title = document.getElementById("title-value");
const body = document.getElementById("body-value");
const publish = document.getElementById("publishbtn");
const edit = document.getElementById("editbtn");
const spinner = document.querySelector(".spinner");
const names = document.getElementById("name-value");
const nameBox = document.querySelector(".namebox");

nameBox.classList.remove("visually-hidden");

const showPost = (posts) => {
  posts.forEach((post) => {
    let div = document.createElement("div");
    div.className = "card mt-4 col-md-6";

    postsList.appendChild(div);

    let div2 = document.createElement("div");
    div2.className = "card-body";
    div2.setAttribute("data-id", `${post.id}`);
    div.appendChild(div2);

    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText = `${post.title}`;
    div2.appendChild(h5);

    let h6 = document.createElement("h6");
    h6.className = "card-subtitle mb-2 text-muted";
    h6.innerText = `${post.date}`;
    div2.appendChild(h6);

    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = `${post.post}`;
    div2.appendChild(p);

    let edit = document.createElement("a");
    let link = document.createTextNode("Edit");
    edit.appendChild(link);

    edit.href = "#";
    edit.className = "card-link";
    edit.setAttribute("id", "edit-btn");
    div2.appendChild(edit);

    let del = document.createElement("a");
    let links = document.createTextNode("Delete");
    del.appendChild(links);

    del.href = "#";
    del.className = "card-link";
    del.setAttribute("id", "delete-btn");
    div2.appendChild(del);
  });
};

// Loading spinner

function showSpinner() {
  spinner.classList.remove("visually-hidden");
}

function hideSpinner() {
  spinner.classList.add("visually-hidden");
}

// Fetch API and display in HTML

function display() {
  showSpinner();
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      hideSpinner();
      showPost(data);
    })

    .catch((error) => console.log(error));
}

display();

// POST

function post() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      post: body.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const dataArray = [];
      dataArray.push(data);
      showPost(dataArray);
      location.reload();
    })
    .catch((error) => console.log(error));
}

publish.addEventListener("click", (e) => {
  e.preventDefault();
  checkName();
});

// DELETE

postsList.addEventListener("click", (e) => {
  e.preventDefault;

  let editBtn = e.target.id == "edit-btn";
  let delBtn = e.target.id == "delete-btn";

  let id = e.target.parentElement.dataset.id;

  if (delBtn) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        location.reload();
      })
      .catch((error) => console.log(error));
  }

  // PUT

  if (editBtn) {
    nameBox.classList.add("visually-hidden");
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector(".card-title").textContent;
    let bodyContent = parent.querySelector(".card-text").textContent;

    title.value = titleContent;
    body.value = bodyContent;
  }

  edit.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        post: body.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        location.reload();
      })
      .catch((error) => console.log(error));
  });
});

// Redirect to sign up page
function signup() {
  window.location.href = "register.html";
}

const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData);

// Function to check if username exist in local storage

function checkName() {
  const check = users.find((a) => a.name === names.value);
  if (check === undefined) {
    alert("Please sign up");
    publish.disabled = true;
    location.reload();
  } else {
    publish.disabled = false;
    post();
  }
}
