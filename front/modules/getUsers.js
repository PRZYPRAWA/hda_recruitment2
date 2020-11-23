import { url } from "./consts.js";
const suggestions = document.querySelector(".suggestions");

function getUsers(word, url, suggestions) {
  if (word) {
    fetch(url + word)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length !== 0) {
          const matches = data
            .map(
              (person) =>
                `<li><span class="name">${person.name} - ${person.age}</span></li>`
            )
            .join("");
          suggestions.innerHTML = matches;
        } else {
          suggestions.innerHTML = `<li><span class="name">Nothing found</span></li>`;
        }
      })
      .catch((err) => console.error(err));
  } else {
    suggestions.innerHTML = `<li><span class="name">Nothing to show</span></li>`;
  }
}

export function displayMatches() {
  let timeout;
  const later = () => {
    timeout = null;
    getUsers(this.value, url, suggestions);
  };

  clearTimeout(timeout);
  timeout = setTimeout(later, 300);
}
