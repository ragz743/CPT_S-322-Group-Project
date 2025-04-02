document.addEventListener("DOMContentLoaded",function(){
    const CreateAnnocunment = document.getElementById("CreateAnnocumentButton");
    

    CreateAnnocunment.addEventListener("click",function(){
        const AnncucmentsName = window.prompt("Enter The Announcement Name")
        const AnncucmentsInfo = window.prompt("Enter The Anncoucnment Details")

        const annoucementData = {
            id: Date.now(),
            mes
        }

    })


})



// // const assignmentName = window.prompt("Enter the Assignment's Name");
// // const assignmentDetails = window.prompt("Enter the Assignment Details");
// // const dueDate = window.prompt("Enter the Due Date");
// // const points = window.prompt("Enter the amount of points this assignment is worth?");

// //genrates the id for fueture access 
// let id = assignments.length + 1;

// //creates the assignment object to use for future refrences 
// let assignment = {
//     id: id,
//     name: assignmentName,
//     details: assignmentDetails,
//     dueDate: dueDate,
//     points: points
// };
