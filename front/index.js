const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const url = "http://localhost:8000/users/"; // backend url

const addForm = document.querySelector(".add-form");

function fetchMatches(word, url, suggestions) {
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

function displayMatches() {
  let timeout;
  const later = () => {
    timeout = null;
    fetchMatches(this.value, url, suggestions);
  };

  clearTimeout(timeout);
  timeout = setTimeout(later, 300);
}

function sendPost(e) {
  e.preventDefault();
  const name = e.target[0].value;
  const age = e.target[1].value;
  console.log(name);
  console.log(age);

  if (!name) {
    console.log("Name is not defined");
  } else if (!age || isNaN(age)) {
    console.log("Age is not defined");
  } else if (age <= 0) {
    console.log("Age is less or equal 0");
  } else if (name && age && !isNaN(age)) {
    const data = {
      name: name,
      age: age,
    };
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    e.target[0].value = "";
    e.target[1].value = "";
  }
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

addForm.addEventListener("submit", (e) => sendPost(e));
