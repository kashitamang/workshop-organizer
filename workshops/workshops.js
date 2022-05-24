import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';
import { renderWorkshop, renderOption } from '../render-utils.js';
checkAuth();

const logoutButton = document.getElementById('logout');
const addParticipantBtn = document.getElementById('add-participant-button');
const workshopsContainer = document.querySelector('.workshops-container');

//console.log(workshopsContainer);

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops(){
    //clear out the Dom on refresh
    //workshopsContainer.textContent = '';
    //grab data from supabase
    const data = await getWorkshops();
    //call render on element
    for (let workshop of data) {
        const workshopEl = renderWorkshop(workshop);

        const ul = document.createElement('ul');
        for (let participant of workshop.participants) {
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact_info}`;
            li.addEventListener ('click', async () => {
                console.log('clicking participant id: ', participant.id);
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });
            ul.append(li);
        }
        workshopEl.append(ul);
        workshopsContainer.append(workshopEl);
    }
}

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    displayWorkshops(workshops);
});

addParticipantBtn.addEventListener('click', () => {
    window.location.href = '../create/index.html';
});