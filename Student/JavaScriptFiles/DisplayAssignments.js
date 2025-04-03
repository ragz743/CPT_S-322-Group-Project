let assignments = JSON.parse(localStorage.getItem('assignments')) || [];


function renderAssignments(){

    const annContainer = document.getElementById("AssCon");
    if(!annContainer) return;
    
    annContainer.innerHTML = "<div>Announcements</div>";

    assignments.forEach(function(announcement){
        let divCreation = document.createElement("div");
        divCreation.className = "announcement-item";
        divCreation.innerHTML = `<div>Name = ${assignments.Name}</div> Description <p>${assignments.Info}</p> Date Published=${announcement.PostedDate}  ID=${announcement.id} </p>`;
        annContainer.appendChild(divCreation);
    });
} 
document.addEventListener("DOMContentLoaded", function(){

    renderAnnouncements()

})
