import { user } from "../objects/user.js";
import { screen } from "../objects/screen.js";

function userIsNotFound() {
  if (user.responseMessage == "Not Found") {
    screen.renderNotFound();
    return true;
  }
}

export { userIsNotFound };
