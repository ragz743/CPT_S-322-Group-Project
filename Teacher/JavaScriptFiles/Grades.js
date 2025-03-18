assignments = JSON.parse(localStorage.getItem('assignments')) || [];

let gradesDiv = document.getElementById('GradesDiv')

for (let i = 0; i < assignments.length; i++) {
    gradesDiv.innerHTML = assignments[i].points;
}