import { getRepositories } from '../services/repositories.js';
import { getUser } from '../services/user.js';
import { getActivities } from '../services/activities.js';
import { user } from '../objects/user.js';

async function getAndSetUserData(userName) {
    const userResponse = await getUser(userName);
    const repositoriesResponse = await getRepositories(userName);
    const activitiesResponse = await getActivities(userName);
    
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setActivities(activitiesResponse);
};

export { getAndSetUserData };