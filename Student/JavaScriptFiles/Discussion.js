let discussionsJson = JSON.parse(localStorage.getItem('discussions')) || [];


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
    const addDis = document.getElementById("adddiscussion")
    renderDisc()
    
    addDis.addEventListener("click",function(){
        DiscRespons = DiscRespons || [];
        let input = window.prompt("Please Enter The Discusion You Would Like To Comment On")
        let index = Number(input)
        if(index == null){
            return;
        }

        for(let i=0; i < discussionsJson.length; i ++){
            if(index == discussionsJson[i].id){
                let response = window.prompt("Please Enter the Response to the Discusion")
                DiscRespons
            }else{
                break;
            }
        }
        renderDisc

    })
})

