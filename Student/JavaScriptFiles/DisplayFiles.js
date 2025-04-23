let filesJson = JSON.parse(localStorage.getItem('Files')) || []

function renderFiles(){
    const list = document.getElementById("FileList")
   
    
    list.innerHTML = '';
    filesJson.forEach(function(file){
        const fileDiv = document.createElement('div')
        fileDiv.className = "FileItems";
  
        fileDiv.innerHTML = `<h3>Filename: ${file.name}</h3> <p>Date Uploaded: ${file.currentDate}</p> <p>ID: ${file.id}</p>`;
        
        const downLoadLink = document.createElement("a")
        downLoadLink.href = file.content
        downLoadLink.download = file.name
        downLoadLink.textContent = "Download"
        fileDiv.appendChild(downLoadLink)
        list.appendChild(fileDiv);
    })
    
}

document.addEventListener("DOMContentLoaded",function(){
    renderFiles()
})




// let assignments = JSON.parse(localStorage.getItem('assignments')) || [];


// function renderAssignments(){

//     const annContainer = document.getElementById("AssCon");
//     if(!annContainer) return;
    
//     annContainer.innerHTML = "<div>Announcements</div>";

//     assignments.forEach(function(assignment){
//         let divCreation = document.createElement("div");
//         divCreation.className = "announcement-item";
//         divCreation.innerHTML = `
//         <h1>Assignment Name : ${assignment.name}</h1>
//         <p>Assignment Details ${assignment.details}</p>
//         <p>Due Date: ${assignment.dueDate}</p>
//         <p>Points: ${assignment.points}</p>`
//         annContainer.appendChild(divCreation);
//     });
// } 
// document.addEventListener("DOMContentLoaded", function(){

//     renderAssignments()

// }) 
