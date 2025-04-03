let announcementJson = JSON.parse(localStorage.getItem('announcement')) || [];


function renderAnnouncements(){

    const annContainer = document.getElementById("AnnCon");
    if(!annContainer) return;
    
    annContainer.innerHTML = "<div>Announcements</div>";

    announcementJson.forEach(function(announcement){
        let divCreation = document.createElement("div");
        divCreation.className = "announcement-item";
        divCreation.innerHTML = `
        <h1>Announcements Name : ${announcement.Name}</h1>
        <h2>Announcements Details ${announcement.Info}</h2>
        <h3>Announcements Date Created: ${announcement.PostedDate}</h3>`
        annContainer.appendChild(divCreation);
    });
} 
document.addEventListener("DOMContentLoaded", function(){

    renderAnnouncements()

})
