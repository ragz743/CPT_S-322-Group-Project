//gets the local stroage if not creates one 
let assignments = JSON.parse(localStorage.getItem('assignments')) || [];

//the function saves the assignment details to be accessed later
function saveAssignments() {
    localStorage.setItem('assignments', JSON.stringify(assignments));
}


document.addEventListener('load', function() {
    const AddAssignment = document.getElementById('CreateAssignmentButton');
    if (!AddAssignment) return;
    
    AddAssignment.addEventListener('click', function () {
        // Prompt the user for assignment details
        const assignmentName = window.prompt("Enter the Assignment's Name");
        const assignmentDetails = window.prompt("Enter the Assignment Details");
        const dueDate = window.prompt("Enter the Due Date");
        const points = window.prompt("Enter the amount of points this assignment is worth?");
        
        // Generate a simple id based on the current number of assignments
        let id = assignments.length + 1;
        
        // Create the assignment object
        let assignment = {
            id: id,
            name: assignmentName,
            details: assignmentDetails,
            dueDate: dueDate,
            points: points
        };

        // Add the new assignment to the assignments array and save it
        assignments.push(assignment);
        saveAssignments();

        // If there's a function to render assignments, call it
        if (typeof window.renderAssignments === 'function') {
            window.renderAssignments();
        }
    });
});
