const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderInfo(user){
        this.userProfile.innerHTML = /*html*/ `
        <section class="section info">
            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
            <div class="data">
                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
            </div>
        </section>
        `;
    },
    renderRepositories(user){
        let userRepositoriesItems = "";
        user.repositories.forEach((repositorie) => {
            userRepositoriesItems += /*html*/`
                <li>
                    <a href="${repositorie}" target="_blank">${repositorie.name}</a>
                </li>
             `;
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += /*html*/`
            <section class="section repositories">
                <h2>Repositórios</h2>
                <ul>
                    ${userRepositoriesItems}
                </ul>
            </section>
        ` 
        } else {
            this.userProfile.innerHTML += "Não possui repositórios ainda!"
        } 
    },
    renderNotFound(){
        this.userProfile.innerHTML = /*html*/`
            <h1>Usuário não existe.</h1>
        `
        return true;
    }
}

export { screen }