//To do input validation for inputs given by the instructure as well as file uploads. 
//maybe redo the input system to like a popup form from 

//gets the local stroage if not creates one 
let assignments = JSON.parse(localStorage.getItem('assignments')) || [];

//the function saves the assignment details to be accessed later
function saveAssignments() {
    localStorage.setItem('assignments', JSON.stringify(assignments));
}

//listens for the page to load 
document.addEventListener('DOMContentLoaded', function() {
    const AddAssignment = document.getElementById('CreateAssignmentButton');
    if (!AddAssignment) return;
    
    //event listner if the addassignmnet button is called 
    AddAssignment.addEventListener('click', function () {
        //Gets the users inputs 
        const assignmentName = window.prompt("Enter the Assignment's Name");
        const assignmentDetails = window.prompt("Enter the Assignment Details");
        const dueDate = window.prompt("Enter the Due Date");
        const points = window.prompt("Enter the amount of points this assignment is worth?");
        
       //genrates the id for fueture access 
        let id = assignments.length + 1;
        
        //creates the assignment object to use for future refrences 
        let assignment = {
            id: id,
            name: assignmentName,
            details: assignmentDetails,
            dueDate: dueDate,
            points: points
        };

        //pushes the assinment into the array and saves it to local storage
        assignments.push(assignment);
        saveAssignments();

        //if we do something to the assignments it reoloads it so it shows up
        if (typeof window.renderAssignments === 'function') {
            window.renderAssignments();
        }
    });
});
