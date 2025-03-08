
//function to render the assingmnets on the assingmnt page
function renderAssignments() {
    //gets the spot it needs to render at 
    const assignmentContainer = document.querySelector('.AssignmentMain');
    //if it cant find it then it does nothing
    if (!assignmentContainer) return;
    //sets the html to assignment
    assignmentContainer.innerHTML = "<div>Assignments</div>";

    //gets the current list of assignment or if it cant find it then creates an emoty array 
    let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
    //runs for every assingmnt 
    assignments.forEach(function(assignment) {
        //creats a new assingment div for every assignmnet 
        let newAssDiv = document.createElement("div");
        newAssDiv.className = "assignment-item";
        //adds the information to the new assignment div
        newAssDiv.innerHTML = '<a href="AssignmentTemplment.html?id=' + assignment.id + '">' + assignment.name + ' - Due: ' + assignment.dueDate  + ' - Worth: ' + assignment.points + ' Points</a>';
        //ads the child to the new dom.
        assignmentContainer.appendChild(newAssDiv);
    });
}

//allows for the renderassingment to be used gloabaly 
window.renderAssignments = renderAssignments;

//runs render assingmenets when the page is loaded
document.addEventListener('load', renderAssignments);
