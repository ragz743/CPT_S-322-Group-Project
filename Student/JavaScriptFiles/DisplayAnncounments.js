let announcementJson = JSON.parse(localStorage.getItem('announcement')) || [];


function renderAnnouncements(){

    const annContainer = document.getElementById("AnnCon");
    if(!annContainer) return;
    
    annContainer.innerHTML = "<div>Announcements</div>";

    announcementJson.forEach(function(announcement){
        let divCreation = document.createElement("div");
        divCreation.className = "announcement-item";
        divCreation.innerHTML = `<div>Name = ${announcement.Name}</div> Description <p>${announcement.Info}</p> Date Published=${announcement.PostedDate}  ID=${announcement.id} </p>`;
        annContainer.appendChild(divCreation);
    });
} 
document.addEventListener("DOMContentLoaded", function(){

    renderAnnouncements()

})
