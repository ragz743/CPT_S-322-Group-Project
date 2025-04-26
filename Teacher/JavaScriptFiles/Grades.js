assignments = JSON.parse(localStorage.getItem('assignments')) || [];
let gradesDiv = document.getElementById('GradesDiv')

gradesDiv.innerHTML = '';

for (let i = 0; i < assignments.length; i++) {
    let assignmentDiv = document.createElement('div');
    assignmentDiv.className = 'grade-item';
    assignmentDiv.innerHTML = `
        <h3>${assignments[i].name}</h3>
        <p>Points: ${assignments[i].points}</p>
        <button class="edit-grade-btn" data-id="${assignments[i].id}">Edit Grade</button>
    `;
    gradesDiv.appendChild(assignmentDiv);
    // gradesDiv.innerHTML = assignments[i].points;
}

/*
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
    */

document.querySelectorAll('.edit-grade-btn').forEach(button => {
    button.addEventListener('click', function () {
        const assignmentId = this.getAttribute('data-id');
        const assignment = assignments.find(a => a.id === assignmentId);
        if (assignment) {
            editGrade(assignment);
        }
    });
});

function editGrade(assignment) {
    let newPoints = window.prompt("Enter new points: ", assignment.points);
    if (newPoints !== null) {
        if (!NaN(newPoints)) {
            assignment.points = newPoints;
            localStorage.setItem('assignments', JSON.stringify(assignments));
            window.location.reload();
        } else {
            alert("Please enter a valid number for points.")
        }
    }
}