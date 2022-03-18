import { baseApiUrl } from '../variables.js';

async function user(userName) {
    const url = `${baseApiUrl}${userName}`;
    const response = await fetch(url);
    return await response.json();
}

export { user } 