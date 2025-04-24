let discussionsJson = JSON.parse(localStorage.getItem('discussions')) || [];


function saveDisc() {
  localStorage.setItem('discussions', JSON.stringify(discussionsJson));
}


function renderDisc() {
  const discContainer = document.getElementById("DisCon");

  if (!discContainer) return;

  discContainer.innerHTML = "" + "<div>Discussions</div>\n\n" + "<div id=\"StudentInput\"></div>\n\n";

  discussionsJson.forEach(function(discussion) {
    const divItem = document.createElement("div");
    divItem.className = "discussion-item";
    divItem.innerHTML = `
      <h1>Discussion Title: ${discussion.Name}</h1>
      <p>Details: ${discussion.Info}</p>
      <small>Posted on: ${discussion.PostedDate} &nbsp;|&nbsp; Id #${discussion.id}</small>`;
    discContainer.appendChild(divItem);
  });
}


document.addEventListener("DOMContentLoaded", function(){
  const createDiscussionButton = document.getElementById("CreateDiscussionButton");
  const discContainer = document.getElementById("DisCon");
  const EditDiscussionButton = document.getElementById("EditDiscussion")
  const DeleteDiscussionButton = document.getElementById("DeleteDiscussion")
  renderDisc();
  
  DeleteDiscussionButton.addEventListener("click",function(){

    
      let indexInput = window.prompt("Please enter the discussion number you want to Delete");
      let index = Number(indexInput)
      
       for(let i = 0; i < discussionsJson.length; i++){
          if(index == discussionsJson[i].id){

              discussionsJson.splice(i,1);
              break;

          }
       }
       saveDisc()
       renderDisc()


  })



  EditDiscussionButton.addEventListener("click",function(){
      let indexInput = window.prompt("Please enter the discussion number you want to edit");
      let index = Number(indexInput)
      
       for(let i = 0; i < discussionsJson.length; i++){
          if(index == discussionsJson[i].id){
              let user_respone = window.prompt("Please Select Which Item you want to edit 1: Name, 2: Info")

              if(user_respone == 1){
                  let newName = window.prompt("Please Enter the New Name", discussionsJson[i].Name);
                  if(newName !== null){
                      discussionsJson[i].Name = newName
                  }
              }else if(user_respone == 2){
                  let newDescript = window.prompt("Please Enter the New Info", discussionsJson[i].Info);
                  if(newDescript !== null){
                      discussionsJson[i].Info = newDescript
                  }
              }else{
                  return
              }
          }
          
       }

      saveDisc();
      window.location.reload();
  })



  createDiscussionButton.addEventListener("click", function(){
      const discussionName = window.prompt("Enter The Discussion Name");
      const discussionInfo = window.prompt("Enter The Discussion Details");
      const GetDate = new Date()
      const StringDate = GetDate.toLocaleDateString()
      let id = discussionsJson.length + 1;
      if(discussionName === null || discussionInfo === null || discussionName.length < 1 || discussionInfo.length < 1){
          return;
      }else{
          const discussionData = {
              id: id,
              Name: discussionName,
              Info: discussionInfo,
              PostedDate: StringDate
            //  StudentInput
          };
  
          discussionsJson.push(discussionData);
          saveDisc();
          renderDisc();
          
      }
      
      

  });
});
