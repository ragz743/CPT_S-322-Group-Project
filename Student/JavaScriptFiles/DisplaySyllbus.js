let syllbusData = JSON.parse(localStorage.getItem('syllbus')) || null;



function renderSyllbus(){
    const syllbusContainer = document.getElementById("SylCon");
    if(!syllbusContainer) return;
    
    syllbusContainer.innerHTML = "<div>Syllabus</div>";

    if (syllbusData) {
        let divCreation = document.createElement("div");
        divCreation.className = "syllbus-item";
        divCreation.innerHTML = `<h1>Syllabus Class Name: ${syllbusData.Name}</h1>
                                 <h2>Syllabus Details: ${syllbusData.Info}</h2>
                                 <h3>Syllabus Date Created: ${syllbusData.PostedDate}</h3>`;
        syllbusContainer.appendChild(divCreation);
    }
} 

document.addEventListener("DOMContentLoaded", function(){

    renderSyllbus()

})




