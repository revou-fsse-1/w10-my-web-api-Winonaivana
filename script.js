const url = "https://6421b41286992901b2ba38ac.mockapi.io/postList";
const postDisplay = document.getElementById("postDisplay");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((data) => {
      postDisplay.innerHTML += `
        <div class="card mt-4 col-md-6">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.date}</h6>
            <p class="card-text">
              ${data.post}
            </p>
            <a href="#" class="card-link">Edit</a>
            <a href="#" class="card-link">Delete</a>
          </div>
        </div>
        `;
    });
  })

  .catch((error) => console.log(error));
