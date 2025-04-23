let filesJson = JSON.parse(localStorage.getItem('Files')) || []


function saveFile(){
    localStorage.setItem('Files',JSON.stringify(filesJson))
}


function renderFiles(){

}


document.addEventListener("DOMContentLoaded", function(){
    const addFileBuitton = document.getElementById("ADDFileButton")
    const deleteFileButton = document.getElementById("RemoveFileButton")
    const inputfiles = document.getElementById("fileInput")
    renderFiles()

    addFileBuitton.addEventListener("click",function(){
        inputfiles.click()
    }) 


    inputfiles.addEventListener("change",function(){

        const file = inputfiles.files[0]

        if(file){
            const reader = new FileReader()
            reader.onload = function(){
                const TextContent = this.result
                const id = filesJson.length + 1
                const fileData = {
                    id: id,
                    name: file.name,
                    content: TextContent
                }

                filesJson.push(fileData)
                saveFile()
                renderFiles()
            }

            reader.readAsText(file)
        }
        


        deleteFileButton.addEventListener("click",function(){


        })


    })
})







