const url = "http://localhost:8000/users/";
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

function fetchMatches(word, url, suggestions) {
  fetch(url + word)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const matches = data
        .map(
          (person) =>
            `<li><span class="name">${person.name} - ${person.age}</span></li>`
        )
        .join("");
      suggestions.innerHTML = matches;
    })
    .catch((err) => console.error(err));
}

function displayMatches() {
  fetchMatches(this.value, url, suggestions);
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
