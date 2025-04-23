let filesJson = JSON.parse(localStorage.getItem('Files')) || []


function saveFile(){
    localStorage.setItem('Files',JSON.stringify(filesJson))
}


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


document.addEventListener("DOMContentLoaded", function(){
    const addFileBuitton = document.getElementById("ADDFileButton")
    const deleteFileButton = document.getElementById("RemoveFileButton")
    const inputfiles = document.getElementById("fileInput")
    renderFiles()

    addFileBuitton.addEventListener("click",function(){
        inputfiles.click()
    }) 

    deleteFileButton.addEventListener("click",function(){

        let index = window.prompt("Please Enter The File Number You Want To Delete")

        for(let i =0; i < filesJson.length; i ++){
            if(index == filesJson[i].id){
                filesJson.splice(i,1);
                break;
            }
            
        }
        saveFile()
        renderFiles()

    })
    inputfiles.addEventListener("change",function(){

        const file = inputfiles.files[0]

        if(file){
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function(){
                const Url = this.result
                const id = filesJson.length + 1
                const currentDate = new Date().toLocaleString();
                const fileData = {
                    id: id,
                    name: file.name,
                    content: Url,
                    currentDate

                }

                filesJson.push(fileData)
                saveFile()
                renderFiles()
            }

            
        }
        


       


    })
})









