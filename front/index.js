import { displayMatches } from "./modules/getUsers.js";
import { postUser } from "./modules/postUser.js";

const searchInput = document.querySelector(".search");
const addForm = document.querySelector(".add-form");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

addForm.addEventListener("submit", (e) => postUser(e));
