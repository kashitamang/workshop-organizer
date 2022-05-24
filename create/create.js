import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

//console.log(workshopsContainer);

logoutButton.addEventListener('click', () => {
    logout();
});
