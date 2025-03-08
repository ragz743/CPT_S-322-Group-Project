
//Uses local storage to store user created assignments if not it creates a new array to store them in
assignments = JSON.parse(localStorage.getItem('assignments')) || [];
//tHis is used to find the templemnt in html to create a new copy simialr to what canvas does for there assignment page
const params = new URLSearchParams(window.location.search);
//This is used to create the id in for the webpage 
const id = parseInt(params.get('id'), 10);

//finds the assignment in the array that matchs the id 
let assignment;
for (let i = 0; i < assignments.length; i++) {
  if (assignments[i].id === id) {
    assignment = assignments[i];
    break;
  }
}

//gets the details divs to create the assignment
const detailsdiv = document.getElementById('assignmentDetails');

//if ture
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