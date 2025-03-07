(function () {
    let assignments = JSON.parse(localStorage.getItem('assignments')) || [];

    function saveAssignments() {
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }

    document.addEventListener('DOMContentLoaded', () => {
        const createButton = document.getElementById('CreateAssignmentButton');
        if (!createButton) return;

        createButton.addEventListener('click', function () {


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

            if (typeof window.renderAssignments === 'function') {
                window.renderAssignments();
            }
        });
    });
})();

