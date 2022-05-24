export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    
    const h3 = document.createElement('h3');
    h3.textContent = workshop.name;

    div.append(h3);

    return div;
}

export function renderOption(workshop) {
    const option = document.createElement('option');
    option.value = workshop.id;
    option.textContent = workshop.name;
    return option;
}

