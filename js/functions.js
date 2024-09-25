const button = document.querySelector('button');
const table = document.querySelector('table');
const pElement = document.querySelector('p');

let rowCount = 0;

button.addEventListener('click', function () {
    const newRow = table.insertRow();

    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell();
        newCell.textContent = Math.floor(Math.random() * 10);
        newCell.classList.add('number-cell');
    }

    rowCount++;
    pElement.textContent = `Valmiita rivejä ${rowCount}`;
});