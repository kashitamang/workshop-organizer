import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const addParticipantBtn = document.getElementById('add-participant-button');
const workshopsEl = document.querySelector('.workshops-container');

//console.log(workshopsEl);

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    displayWorkshops(workshops);
});