import { url } from "./consts.js";
const suggestions = document.querySelector(".suggestions");

const userListItem = (info) => `<li><span class="name">${info}</span></li>`;

function getUsers(word, url, suggestions) {
  if (word) {
    fetch(url + word)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length !== 0) {
          const matches = data
            .map((person) => userListItem(`${person.name} - ${person.age}`))
            .join("");
          suggestions.innerHTML = matches;
        } else {
          suggestions.innerHTML = userListItem("Nothing found");
        }
      })
      .catch((err) => console.error(err));
  } else {
    suggestions.innerHTML = userListItem("Nothing to show");
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
