
let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'), 10);
const assignment = assignments.find(item => item.id === id);

const detailsDiv = document.getElementById('assignmentDetails');

if (assignment) {
    detailsDiv.innerHTML = `
    <h1>${assignment.name}</h1>
    <p>${assignment.details}</p>
    <p>Due Date: ${assignment.dueDate}</p>
    <p>Points: ${assignment.points}</p>
    <button>Edit the Assignment</button>
    `;
} else {
    detailsDiv.innerHTML = "<p>Assignment not found.</p>";
}
