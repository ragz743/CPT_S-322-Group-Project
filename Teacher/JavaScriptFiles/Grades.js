assignments = JSON.parse(localStorage.getItem('assignments')) || [];

let gradesDiv = document.getElementById('GradesDiv')

for (let i = 0; i < assignments.length; i++) {
    gradesDiv.innerHTML = assignments[i].points;
}


if (assignment) {
    //sets the inner
    detailsdiv.innerHTML = `
    <h1>Assignment Name : ${assignment.name}</h1>
    <p>Assignment Details ${assignment.details}</p>
    <p>Due Date: ${assignment.dueDate}</p>
    <p>Points: ${assignment.points}</p>
    <button id='EditButton'>Edit the Assignment</button>
    <button id='DeleteButton' >Delete The Assignment?</button>

    `;
}