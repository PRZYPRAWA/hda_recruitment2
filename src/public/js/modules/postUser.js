import { url } from "./consts.js";
import { modal } from "./modal.js";

export function postUser(e) {
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
