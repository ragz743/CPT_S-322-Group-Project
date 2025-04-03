// Used Chat GPT for functions
document.addEventListener("DOMContentLoaded", function () {
  showTab(null, 'manage-users')
});

// Switch tabs  
function showTab(event, tabName) {
  let i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Saves users to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Adds a new User 
function createUser() {
  let users = JSON.parse(localStorage.getItem("users"));
  let role = document.getElementById("user-role").value;
  let username = document.getElementById("new-username").value.trim();
  let password = document.getElementById("new-password").value.trim();
  let email = document.getElementById("new-email").value.trim();
  let errorMessage = document.getElementById("new-error");

  if (!username || !password || !email) {
    console.error("All fields are required to be filled!");
    errorMessage.textContent = "All fields are required to be filled!";
    errorMessage.style.display = "block";
    return;
  }

  if (users[role].some(user => user.username === username)) {
    console.error("This username already exists!");
    errorMessage.textContent = "This username already exists!";
    errorMessage.style.display = "block";
  }

  users[role].push({ username, password, email });
  saveUsers(users);
  errorMessage.style.display = "none";
  alert("User has been added successfully!");
}

// Removes a user
function removeUser() {
  let users = JSON.parse(localStorage.getItem("users"));
  let username = document.getElementById("remove-username").value.trim();
  let userType = document.getElementById("remove-userType").value;
  let errorMessage = document.getElementById("remove-error");

  let index = users[userType].findIndex(user => user.username === username);
  if (index === -1) {
    console.error("User cannot be found!");
    errorMessage.textContent = "User cannot be found!";
    errorMessage.style.display = "block";
    return;
  }

  users[userType].splice(index, 1);
  saveUsers(users);
  errorMessage.style.display = "none";
  alert("User has been removed successfully!");
}

// Displays users
function displayUsers() {
  let users = JSON.parse(localStorage.getItem("users"));
  document.getElementById("user-list").textContent = JSON.stringify(users, null, 2);
}

// Modifies a user
function modifyUser() {
  let users = JSON.parse(localStorage.getItem("users"));
  let username = document.getElementById("modify-username").value.trim();
  let newPassword = document.getElementById("modify-password").value.trim();
  let userType = document.getElementById("modify-userType").value;
  let errorMessage = document.getElementById("modify-error");

  let user = users[userType].find(user => user.username === username);
  if (!user) {
    console.error("User cannot be found!");
    errorMessage.textContent = "User cannot be found!";
    errorMessage.style.display = "block";
  }

  user.password = newPassword;
  saveUsers(users);
  alert("User has been modified successfully!");
}