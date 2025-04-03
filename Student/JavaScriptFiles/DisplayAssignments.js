let assignments = JSON.parse(localStorage.getItem('assignments')) || [];


function renderAssignments(){

    const annContainer = document.getElementById("AssCon");
    if(!annContainer) return;
    
    annContainer.innerHTML = "<div>Announcements</div>";

    assignments.forEach(function(assignment){
        let divCreation = document.createElement("div");
        divCreation.className = "announcement-item";
        divCreation.innerHTML = `
        <h1>Assignment Name : ${assignment.name}</h1>
        <p>Assignment Details ${assignment.details}</p>
        <p>Due Date: ${assignment.dueDate}</p>
        <p>Points: ${assignment.points}</p>`
        annContainer.appendChild(divCreation);
    });
} 
document.addEventListener("DOMContentLoaded", function(){

    renderAssignments()

}) 
