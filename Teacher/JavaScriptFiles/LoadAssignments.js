(function () {
    function renderAssignments() {
        const assignmentContainer = document.querySelector('.AssignmentMain');
        if (!assignmentContainer) return;

        assignmentContainer.innerHTML = "<div>Assignments</div>";

        let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
        assignments.forEach(assignment => {
            let newAssDiv = document.createElement("div");
            newAssDiv.className = "assignment-item";
            newAssDiv.innerHTML = `<a href="AssignmentTemplment.html?id=${assignment.id}">
                                  ${assignment.name} - Due: ${assignment.dueDate} - Worth: ${assignment.points} Points
                                </a>`;
            assignmentContainer.appendChild(newAssDiv);
        });
    }

    window.renderAssignments = renderAssignments;

    document.addEventListener('DOMContentLoaded', renderAssignments);
})();
