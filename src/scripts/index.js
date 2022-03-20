import { getRepositories } from './services/repositories.js';
import { getUser } from './services/user.js';
import { user } from './objects/user.js';
import { screen } from './objects/screen.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    console.log(user.name);
    if (validateEmptyInput(userName)) return;
    
    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (event) => {
    const userName = event.target.value;
    const key = event.which || event.keyCode;
    const isEnterPressed = key === 13;

    if (isEnterPressed) {
        if (validateEmptyInput(userName) === true) return;
        getUserData(userName);
    }
});

function validateEmptyInput(userName) {
    if (userName.length == 0) { 
        alert("Preencha o campo com o nome do usuário!");
        return true;
    } 
}

async function getUserData(userName) {
    const userResponse = await getUser(userName);
    const repositoriesResponse = await getRepositories(userName);

    if (userResponse.message == "Not Found"){
        screen.renderNotFound();
        return;
    };

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);

    screen.renderInfo(user);
    screen.renderRepositories(user);
}

