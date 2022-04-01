import { getAndSetUserData } from "./actions/getAndSetUserData.js";
import { renderUserData } from "./actions/renderUserData.js";
import { inputIsEmpty } from "./validations/inputIsEmpty.js";

const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");

btnSearch.addEventListener("click", async () => {
  const userName = document.getElementById("input-search").value;
  if (inputIsEmpty(userName)) return;
  await getAndSetUserData(userName);
  renderUserData();
});

inputSearch.addEventListener("keyup", async (event) => {
  const userName = event.target.value;
  const key = event.which || event.keyCode;
  const isEnterPressed = key === 13;

  if (isEnterPressed) {
    if (inputIsEmpty(userName)) return;
    await getAndSetUserData(userName);
    renderUserData();
  }
});
