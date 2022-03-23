import { getRepositories } from './services/repositories.js';
import { getUser } from './services/user.js';
import { getActivities } from './services/activities.js';
import { user } from './objects/user.js';
import { screen } from './objects/screen.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

btnSearch.addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
    
});

inputSearch.addEventListener('keyup', (event) => {
    const userName = event.target.value;
    const key = event.which || event.keyCode;
    const isEnterPressed = key === 13;

    if (isEnterPressed) {
        if (validateEmptyInput(userName)) return;
        getUserData(userName);
    }
});

function validateEmptyInput(userName) {
    if (userName.length == 0) { 
        alert("Preencha o campo com o nome do usuário!");
        return true;
    } 
};

async function getUserData(userName) {
    const userResponse = await getUser(userName);
    const repositoriesResponse = await getRepositories(userName);
    const activitiesResponse = await getActivities(userName);
    
    if (userResponse.message == "Not Found"){
        screen.renderNotFound();
        return;
    };

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setActivities(activitiesResponse);

    screen.renderInfo(user);
    screen.renderRepositories(user);
    screen.renderActivities(user);
};

