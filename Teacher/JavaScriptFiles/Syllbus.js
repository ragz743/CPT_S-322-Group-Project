
let syllbusData = JSON.parse(localStorage.getItem('syllbus')) || null;

function saveSyllbus() {
    localStorage.setItem('syllbus', JSON.stringify(syllbusData));
}

function renderSyllbus(){
    const syllbusContainer = document.getElementById("SylCon");
    if(!syllbusContainer) return;
    
    syllbusContainer.innerHTML = "<div>Syllabus</div>";

    if (syllbusData) {
        let divCreation = document.createElement("div");
        divCreation.className = "syllbus-item";
        divCreation.innerHTML = `<h1>Syllabus Class Name: ${syllbusData.Name}</h1> <h2>Syllabus Details: ${syllbusData.Info}</h2> <h3>Syllabus Date Created: ${syllbusData.PostedDate}</h3>`;
        syllbusContainer.appendChild(divCreation);
    }
} 

document.addEventListener("DOMContentLoaded", function(){
    const createSyllbusButton = document.getElementById("CreateSyllbusButton");
    const syllbusContainer = document.getElementById("SylCon");
    const editButton = document.getElementById("Edit");
    const deleteButton = document.getElementById("Delete");
    
    renderSyllbus();
    
    deleteButton.addEventListener("click", function(){
        syllbusData = null;
        saveSyllbus();
        renderSyllbus();
    });

    editButton.addEventListener("click", function(){
        if (!syllbusData) {
            alert("No syllabus exists to edit.");
            return;
        }
        let user_response = window.prompt("Please select which field you want to edit: 1 for Name, 2 for Info");
        if (user_response == "1") {
            let newName = window.prompt("Please enter the new name", syllbusData.Name);
            if(newName !== null){
                syllbusData.Name = newName;
            }
        } else if (user_response == "2") {
            let newInfo = window.prompt("Please enter the new info", syllbusData.Info);
            if(newInfo !== null){
                syllbusData.Info = newInfo;
            }
        } else {
            return;
        }
        saveSyllbus();
        renderSyllbus();
    });

    createSyllbusButton.addEventListener("click", function(){
        const syllbusName = window.prompt("Enter the Syllabus Class Name");
        const syllbusInfo = window.prompt("Enter the Syllabus Details");
        const getDate = new Date();
        const stringDate = getDate.toLocaleDateString();
        
        if(syllbusName === null || syllbusInfo === null){
            return;
        }

  
        syllbusData = {
            Name: syllbusName,
            Info: syllbusInfo,
            PostedDate: stringDate
        };

        saveSyllbus();
        renderSyllbus();
    });
});
