const url = "http://localhost:8000/users/ac";
let a = fetch(url)
  .then((res) => res.json())
  .then((e) => console.log(e))
  .catch((err) => console.error(err));
