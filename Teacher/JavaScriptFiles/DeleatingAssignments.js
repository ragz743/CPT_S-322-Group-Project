
document.addEventListener('DOMContentLoaded', () => {
    let assignments = JSON.parse(localStorage.getItem('assignments')) || [];

    function deleteAssignmentById(id) {
        // Convert assignment.id to a number in case it's stored as a string
        assignments = assignments.filter(assignment => Number(assignment.id) !== id);
        localStorage.setItem('assignments', JSON.stringify(assignments));
        console.log(`Assignment with id ${id} deleted.`);
    }

    const deleteButton = document.getElementById("DeleteButton");
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            const idToDelete = parseInt(window.prompt("Enter the assignment id to delete:"), 10);
            if (!isNaN(idToDelete)) {
                deleteAssignmentById(idToDelete);
            } else {
                alert("Invalid id.");
            }
        });
    } else {
        console.log("DeleteButton not found.");
    }
});



// let test = document.getElementById("DeleteButton")
// test.addEventListener('click',function(){
//     console.log("this worked")
// })

