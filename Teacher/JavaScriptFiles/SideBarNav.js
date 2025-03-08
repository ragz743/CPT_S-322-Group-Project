
//Creats a 2d array of the nav bar
const NavArray = [
    {id: 'Annoucments', url: 'Anncucments.html'},
    {id: 'Assignments', url: 'Assignments.html'},
    {id: 'Discussions', url: 'Discussions.html'},
    {id: 'Files', url: 'Files.html'},
    {id: 'Grades', url: 'Grades.html'},
    {id: 'Messages', url: 'Messages.html'},
    {id: 'Syllbus', url: 'Syllbus.html'},
    {id: 'Modules', url: 'modules.html'},
];


//runs for every item in this case for ever untill the program ends
for(let item of NavArray){
    //get the element clicked
    const element = document.getElementById(item.id);
    //if true 
    if(element){
        //goes to that spesfic html window
        element.addEventListener('click',function(){
            window.location.href = item.url
        })
        //error handling
    }else{
        console.log("Error This is Not a Element Witht that id.")
    }
}







// const FilesDiv = document.getElementById('Files');


// FilesDiv.addEventListener('click', function () {
//     window.location.href = 'TeFiles.html'

// })

// const GradesDiv = document.getElementById('Grades');


// GradesDiv.addEventListener('click', function () {
//     window.location.href = 'TeGrades.html'

// })

// const MessagesDiv = document.getElementById('Messages');

// MessagesDiv.addEventListener('click', function () {
//     window.location.href = 'TeMessages.html'

// })

// const SyllbusDiv = document.getElementById('Syllbus');


// SyllbusDiv.addEventListener('click', function () {
//     window.location.href = 'TeSyllbus.html'

// })

// const modulesDiv = document.getElementById('Modules');

// modulesDiv.addEventListener('click', function () {
//     window.location.href = 'Temodules.html'

// })



// const AnnoucmentDiv = document.getElementById('Annoucments');


// AnnoucmentDiv.addEventListener('click', function () {
//     window.location.href = 'TeAnncucments.html'

// })

// const AssignmentDiv = document.getElementById('Assignments');


// AssignmentDiv.addEventListener('click', function () {
//     window.location.href = 'TeAssignments.html'

// })

// const DiscussionDiv = document.getElementById('Discussions');


// DiscussionDiv.addEventListener('click', function () {
//     window.location.href = 'TeDiscussions.html'

// })