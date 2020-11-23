const url = "http://localhost:8000/users/"; // backend url

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
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

function modal(info, error = false, time = 1000) {
  const body = document.querySelector("body");
  const mod = document.createElement("div");

  function modalOn() {
    mod.className = `modal ${error ? "modal--error" : ""}`;
    mod.innerText = info;

    body.appendChild(mod);
  }

  function modalOff() {
    body.removeChild(mod);
  }

  modalOn();
  setTimeout(modalOff, time);
}

function sendPost(e) {
  e.preventDefault();
  const name = e.target[0].value;
  const age = e.target[1].value;
  console.log(name, age);

  if (!name) {
    const info = "Name is not defined";
    modal(info, true);
  } else if (!age || isNaN(age)) {
    const info = "Age is not defined";
    modal(info, true);
  } else if (age <= 0) {
    const info = "Age is less or equal 0";
    modal(info, true);
  } else if (name && age && !isNaN(age)) {
    const data = {
      name: name,
      age: age,
    };
    let status;
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
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((elem) => {
        console.log(elem);
        modal(elem.info, status === 200 ? false : true);
      })
      .catch((err) => console.error(err));

    e.target[0].value = "";
    e.target[1].value = "";
  }
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

addForm.addEventListener("submit", (e) => sendPost(e));
