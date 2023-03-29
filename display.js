const url = "https://6421b41286992901b2ba38ac.mockapi.io/postList/";
const postsList = document.querySelector(".posts-list");
let output = "";

const renderPosts = (posts) => {
  posts.forEach((post) => {
    output += `
      <div class="card mt-4 col-md-6 bg-light">
          <div class="card-body" data-id=${post.id}>
            <h5 class="card-title">${post.user}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${post.title}</h6>
            <p class="card-text">${post.post}</p>
            <a href="#" class="card-link" id="edit-post">Edit</a>
            <a href="#" class="card-link" id="delete-post">Delete</a>
          </div>
        </div>
      `;
  });
  postsList.innerHTML = output;
};

function details(e) {
  let id = e.target.parentElement.dataset.id;

  fetch(`${url}/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

details();
