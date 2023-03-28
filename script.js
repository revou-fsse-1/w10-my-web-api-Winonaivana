const url = "https://6421b41286992901b2ba38ac.mockapi.io/postList";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => console.log(error));
