
// //todo allow for file submsion while also redoing the promting system to a pop up 

assignments = JSON.parse(localStorage.getItem('assignments')) || [];

const EditButton = document.getElementById("EditButton")

EditButton.addEventListener('click', function () {

    let index;
    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].id === assignment.id) {
            index = i;
            break;
        }
    }

    let user_respone = window.prompt("Please Slect Which Item you want to edit 1: Assignment, 2: Assignment Details, 3: Due Date, 4: Points")

    if (user_respone == 1) {
        let newAssignmentName = window.prompt("Please Enter the new Assignment Name", assignment.name);
        if (newAssignmentName !== null) {
            assignments[index].name = newAssignmentName
        }
    } else if (user_respone == 2) {
        let newAssignmentDescription = window.prompt("Please Enter the new Assignment Description", assignment.details);
        if (newAssignmentDescription !== null) {
            assignments[index].details = newAssignmentDescription
        }
    } else if (user_respone == 3) {
        let newDueDate = window.prompt("Please Enter the new Assignment Due Date", assignment.dueDate);
        if (newDueDate !== null) {
            assignments[index].dueDate = newDueDate
        }
    } else if (user_respone == 4) {
        let newPoint = window.prompt("Please Enter the new Assignment Points", assignment.points);

        if (newPoint !== null) {
            if (!NaN(newPoint) && newPoint.trim() !== "") {
                assignments[index].points = newPoint
            } else {
                window.alert("Please Enter A Valid Number for Points")
            }
        }
    } else {
        window.alert("Please Enter A Valid Number")
        return
    }
    //console.log("this wokred3")
    saveAssignments();
    // console.log("this wokred")
    window.location.reload();
})