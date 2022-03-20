import { reposQuant, baseApiUrl } from '../variables.js';

async function getRepositories(userName) {
    const url = `${baseApiUrl}${userName}/repos?per_page=${reposQuant}`;
    const response = await fetch(url);
    return await response.json();
}

export { getRepositories }