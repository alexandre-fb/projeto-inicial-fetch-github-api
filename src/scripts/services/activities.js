import { baseApiUrl, activitiesQuant } from "../variables.js";

async function getActivities(userName){
    const url = `${baseApiUrl}${userName}/events/public?per_page=${activitiesQuant}`;                                         
    const response = await fetch(url);
    return response.json();
}

export { getActivities }