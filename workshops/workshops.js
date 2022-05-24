import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';
import { renderWorkshop, renderOption } from '../render-utils.js';
checkAuth();

const logoutButton = document.getElementById('logout');
const addParticipantBtn = document.getElementById('add-participant-button');
const workshopsContainer = document.querySelector('.workshops-container');

//console.log(workshopsEl);

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    displayWorkshops(workshops);
});