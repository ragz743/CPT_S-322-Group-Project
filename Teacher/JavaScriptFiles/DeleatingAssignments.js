//finds the deletebutton
let deletebutton = document.getElementById('DeleteButton');
//if true it moves on
if (deletebutton) {
    //adds an event listner
    deletebutton.addEventListener('click', function () {
        //remove the assignment with the current id
        assignments = assignments.filter(function (item) {
            return item.id !== id;
        });
        //updates the local storage
        localStorage.setItem('assignments', JSON.stringify(assignments));

        //Redirects back to the assignments home page
        window.location.href = "Assignments.html";
    });
}


