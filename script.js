const url = "https://6421b41286992901b2ba38ac.mockapi.io/postList";
const postsList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
const title = document.getElementById("title-value");
const body = document.getElementById("body-value");
const publish = document.querySelector(".btn");
let output = "";

const showPost = (posts) => {
  posts.forEach((post) => {
    output += `
        <div class="card mt-4 col-md-6">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
            <p class="card-text">${post.post}</p>
            <a href="#" class="card-link" id="edit-btn">Edit</a>
            <a href="#" class="card-link" id="delete-btn">Delete</a>
          </div>
        </div>
        `;
  });
  postsList.innerHTML = output;
};

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    showPost(data);
  })

  .catch((error) => console.log(error));

// POST

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

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
    });
});
