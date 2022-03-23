const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    activities: [],
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepositories(gitHubUser) {
        this.repositories = gitHubUser;
    },
    setActivities(gitHubUser){
        this.activities = gitHubUser;
    }
}

export { user };