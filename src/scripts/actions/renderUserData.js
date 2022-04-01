import { screen } from "../objects/screen.js";
import { user } from "../objects/user.js";
import { userIsNotFound } from "../validations/userIsNotFound.js";

function renderUserData() {

  if (userIsNotFound()) return
  screen.renderInfo(user);
  screen.renderRepositories(user);
  screen.renderActivities(user);
}

export { renderUserData };
