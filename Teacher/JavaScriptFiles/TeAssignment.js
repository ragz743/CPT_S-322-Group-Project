let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
function saveAssignments() {
    localStorage.setItem('assignments', JSON.stringify(assignments));
}

document.getElementById('CreateAssignmentButton').addEventListener('click', function () {
    const assignmentName = window.prompt("Enter the Assignment's Name");
    const assignmentDetails = window.prompt("Enter the Assignment Details");
    const dueDate = window.prompt("Enter the Due Date");
    const points = window.prompt("Enter the amount of points this assignment is worth?");

    let id = assignments.length + 1;
    let assignment = {
        id,
        name: assignmentName,
        details: assignmentDetails,
        dueDate,
        points
    };
    assignments.push(assignment);
    saveAssignments();
    let newAssDiv = document.createElement("div");
    newAssDiv.className = "assignment-item";
    newAssDiv.innerHTML = `<a href="AssignmentTemplment.html?id=${id}">${assignmentName} Due On ${dueDate}  Worth ${points}</a>`;
    document.querySelector(".AssignmentMain").appendChild(newAssDiv);


});

