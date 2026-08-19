"use strict";


// ---------------- DATA ----------------

const PEOPLE = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" }
];


const DETAILS = [
    { id: 1, age: 25, weight: 60, height: 165 },
    { id: 2, age: 31, weight: 82, height: 181 },
    { id: 3, age: 28, weight: 74, height: 176 },
    { id: 4, age: 35, weight: 68, height: 170 }
];


// ---------------- DOM ----------------

const peopleTable = document.querySelector("#peopleTable");
const detailsTable = document.querySelector("#detailsTable");


// ---------------- START ----------------

renderPeople();

peopleTable.addEventListener("click", (event) => {

    const row = event.target.closest("tr[data-person-id]");

    if (!row) return;

    const personId = Number(row.dataset.personId);

    showDetails(personId);
});


// ---------------- RENDER PEOPLE ----------------

function renderPeople() {

    peopleTable.textContent = "";

    for (const person of PEOPLE) {

        const row = document.createElement("tr");

        row.dataset.personId = person.id;

        row.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
        `;

        peopleTable.appendChild(row);
    }
}


// ---------------- SHOW DETAILS ----------------

function showDetails(personId) {

    const details = DETAILS.find(
        person => person.id === personId
    );

    if (!details) {
        detailsTable.innerHTML = `
            <tr>
                <td colspan="4">No details found</td>
            </tr>
        `;

        return;
    }

    detailsTable.innerHTML = `
        <tr>
            <td>${details.id}</td>
            <td>${details.age}</td>
            <td>${details.weight} kg</td>
            <td>${details.height} cm</td>
        </tr>
    `;
}