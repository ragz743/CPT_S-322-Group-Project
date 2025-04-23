assignmentsData = [
    { assignment: "Group Project 1", dueDate: "2/10/25", subStatus: "Yes", grade: "9/10", feedback: ["Good  Job!!", " -1pt Blank missing"] },
    { assignment: "Group Project 2", dueDate: "3/1/25", subStatus: "No", grade: "F", feedback: [] },
    { assignment: "Programming Assigment 1", dueDate: "4/10/25", subStatus: "No", grade: "0/10", feedback: ["-10pts Overdue- Seth T "] },
    { assignment: "Quiz 1", dueDate: "1/1/25", subStatus: "YEs", grade: "100/100", feedback: [""] }
]


function populateGradesTable() {
    let storedData = localStorage.getItem("assignmentsData");
    let assignments = storedData ? JSON.parse(storedData) : [];

    const tableBody = document.querySelector("#Grades_Table tbody");

    assignments.forEach((assignment) => {
        const row = document.createElement('tr');
        const assignmentCell = document.createElement('td');
        assignmentCell.textContent = assignment.assignment;

        const DueDateCell = document.createElement('td');
        DueDateCell.textContent = assignment.dueDate;

        const SubStatusCell = document.createElement('td');
        if (assignment.subStatus.toLowerCase() === "yes") {
            SubStatusCell.innerHTML = "&#10003;";
        }
        else {
            SubStatusCell.innerHTML = "&#10007;";
        }

        const gradeCell = document.createElement('td');
        gradeCell.textContent = assignment.grade;

        const FeedbackCell = document.createElement('td');
        const FeedbackButtonCell = document.createElement('button');
        FeedbackButtonCell.textContent = "View Feedback";
        FeedbackButtonCell.onclick = () => showFeedback(assignment.feedback);
        FeedbackCell.appendChild(FeedbackButtonCell);

        row.appendChild(assignmentCell);
        row.appendChild(DueDateCell);
        row.appendChild(SubStatusCell);
        row.appendChild(gradeCell);
        row.appendChild(FeedbackCell);

        tableBody.appendChild(row);
    });
}

function showFeedback(feedback) {
    const popup = document.getElementById("FeedbackPopup");
    const text = document.getElementById("FeedbackText");
    text.textContent = feedback;
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("FeedbackPopup");
    popup.style.display = "none";
}

window.onload = function () {
    if (!localStorage.getItem("assignmentsData")) {
        localStorage.setItem("assignmentsData", JSON.stringify(assignmentsData));
    }
    populateGradesTable();
}