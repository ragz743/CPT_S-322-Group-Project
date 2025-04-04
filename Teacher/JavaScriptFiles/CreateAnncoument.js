

let announcementJson = JSON.parse(localStorage.getItem('announcement')) || [];


function saveAnnouncements() {
    localStorage.setItem('announcement', JSON.stringify(announcementJson));
}


function renderAnnouncements(){

    const annContainer = document.getElementById("AnnCon");
    if(!annContainer) return;
    
    annContainer.innerHTML = "<div>Announcements</div>";

    announcementJson.forEach(function(announcement){
        let divCreation = document.createElement("div");
        divCreation.className = "announcement-item";1
        divCreation.innerHTML = `<h1>Announcements Name : ${announcement.Name}</h1>
        <h2>Announcements Details ${announcement.Info}</h2>
        <h3>Announcements Date Created: ${announcement.PostedDate} & Id # ${announcement.id}</h3>`
        annContainer.appendChild(divCreation);
    });
} 

document.addEventListener("DOMContentLoaded", function(){
    const createAnnouncementButton = document.getElementById("CreateAnnocumentButton");
    const annContainer = document.getElementById("AnnCon");
    const EditButton = document.getElementById("Edit")
    const DeleteButton = document.getElementById("Delete")
    renderAnnouncements();
    
    DeleteButton.addEventListener("click",function(){

        let indexInput = window.prompt("Please enter the annocument number you want to Delete");
        let index = Number(indexInput)
        
         for(let i =0; i < announcementJson.length; i++){
            if(index == announcementJson[i].id){

                announcementJson.splice(i,1);
                break;

            }
         }
         saveAnnouncements()
         renderAnnouncements()


    })



    EditButton.addEventListener("click",function(){
        let indexInput = window.prompt("Please enter the annocument number you want to edit");
        let index = Number(indexInput)
        
         for(let i =0; i < announcementJson.length; i++){
            if(index == announcementJson[i].id){
                let user_respone = window.prompt("Please Slect Which Item you want to edit 1: Name, 2: Info")

                if(user_respone == 1){
                    let newName = window.prompt("Please Enter the New Name", announcementJson[i].Name);
                    if(newName !== null){
                        announcementJson[i].Name = newName
                    }
                }else if(user_respone == 2){
                    let newDescript = window.prompt("Please Enter the New Info", announcementJson[i].Info);
                    if(newDescript !== null){
                        announcementJson[i].Info = newDescript
                    }
                }else{
                    return
                }
            }
            
         }

        saveAnnouncements();
        window.location.reload();
    })



    createAnnouncementButton.addEventListener("click", function(){
        const announcementName = window.prompt("Enter The Announcement Name");
        const announcementInfo = window.prompt("Enter The Announcement Details");
        const GetDate = new Date()
        const StringDate = GetDate.toLocaleDateString()
        let id = announcementJson.length + 1;
        if(announcementName === null || announcementInfo === null){
            return;
        }

        const announcementData = {
            id: id,
            Name: announcementName,
            Info: announcementInfo,
            PostedDate: StringDate
        };

        announcementJson.push(announcementData);
        saveAnnouncements();


        const divCreation = document.createElement("div");
        divCreation.className = "announcement-item";
        
        divCreation.innerHTML = `<h1>Announcements Name : ${announcement.Name}</h1>
        <h2>Announcements Details ${announcement.Info}</h2>
        <h3>Announcements Date Created: ${announcement.PostedDate} & Id # ${announcement.id}</h3>`
        annContainer.appendChild(divCreation);

    });
});




