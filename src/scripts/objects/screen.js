const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderInfo(user){
        this.userProfile.innerHTML = /*html*/ `
            <section class="section info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                <div class="data">
                    <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                    <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                    <div class="followers-following">
                        <div class="container-follow">
                            <p>Seguidores</p>
                            <span>👇</span>
                            <p class="value">${user.followers}</p>
                        </div>
                        <div class="container-follow"> 
                            <p>Seguindo</p>
                            <span>👇</span>
                            <p class="value">${user.following}</p>
                        </div>
                     </div>
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
            this.userProfile.innerHTML += /*html*/ `
                <section class="section">
                    <h3>Ainda não possui repositórios!</h3>
                </section>
            `
        } 
    },
    renderActivities(user){
        let userActivitiesItems = "";
        user.activities.forEach((activity) => {
            userActivitiesItems += /*html*/`
                <li><a href="https://github.com/${activity.repo.name}" target="_blank">${activity.repo.name}</a>: <span class="type-of-activity">${activity.type}</span></li>
            `
        })

        if(user.activities.length != 0) {
            this.userProfile.innerHTML += /*html*/ `
                <section class="section activities">
                    <h2 class="activities">Atividades recentes</h2>
                    <ul>${userActivitiesItems}</ul>
                </section>
            `
        } else {
            this.userProfile.innerHTML += /*html*/ `
                <section class="section">
                    <h3>Ainda não possui atividades!</h3>
                </section>
            `
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