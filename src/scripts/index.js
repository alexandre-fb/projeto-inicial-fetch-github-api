import { user } from './services/user.js';
import { repositories } from './services/repositories.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    getUserProfile(userName);
    getUserRepositories (userName);
})

document.getElementById('input-search').addEventListener('keyup', (event) => {
    const userName = event.target.value;
    const key = event.which || event.keyCode;
    const isEnterPressed = key === 13;

    if (isEnterPressed) {
        getUserProfile(userName)
        getUserRepositories (userName);
    }
})



function getUserProfile (userName) {
    user(userName).then(userData => {
        let userInfo = /*html*/ `
            <section class="section info">
                <img src="${userData.avatar_url}" alt="Foto do perfil do usuário"/>
                <div class="data">
                    <h1>${userData.name ?? "Não possui nome cadastrado 😢"}</h1>
                    <p>${userData.bio ?? "Não possui bio cadastrada 😢"}</p>
                </div>
            </section>
        `;
        document.querySelector('.profile-data').innerHTML = userInfo;
    })
}

function getUserRepositories (userName) {
    repositories(userName).then(reposData => {
        let userRepositoriesItems = ""
        console.log(reposData)
        reposData.forEach(repoData => {
            userRepositoriesItems += /*html*/`
                <li>
                    <a href="${repoData.html_url}" target="_blank">${repoData.name}</a>
                </li>
        `;
        });
        
        let userRepositories = /*html*/`
            <section class="section repositories">
                <h2>Repositórios</h2>
                <ul>
                    ${userRepositoriesItems}
                </ul>
            </section>
        `
        document.querySelector('.profile-data').innerHTML += userRepositories;
    })
}


