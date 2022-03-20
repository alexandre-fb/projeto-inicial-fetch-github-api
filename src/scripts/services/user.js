import { baseApiUrl } from '../variables.js';

async function getUser(userName) {
    const url = `${baseApiUrl}${userName}`;
    const response = await fetch(url);
    return await response.json();
}

export { getUser } 