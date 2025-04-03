document.addEventListener("DOMContentLoaded", function () {
  setupUsers();
  setupEventListeners();
});

// Stores users in localStorage
function setupUsers() {
  if (!localStorage.getItem("users")) {
    let users = {
      student: [
        { username: "student123", password: "password1", email: "dummystudent@gmail.com" } // Dummy Student account
      ],
      teacher: [
        { username: "teacher456", password: "password2", email: "dummyteacher@gmail.com" } // Dummy Teacher account
      ],
      admin: [
        { username: "admin789", password: "password3", email: "dummyadmin@gmail.com" } // Dummy Admin account
      ]
    };
    localStorage.setItem("users", JSON.stringify(users)); // Save users to local storage
  }
}

// Creates event listeners when the button is submitted
// Used Chat GPT for this function
function setupEventListeners() {
  document.getElementById("student-form").addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser("student");
  });

  document.getElementById("teacher-form").addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser("teacher");
  });

  document.getElementById("admin-form").addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser("admin");
  });
}

// Logs in the user
// Used Chat GPT for this function
function loginUser(userType) {

  let usernameInput = document.getElementById(`${userType}-username-input`);
  let passwordInput = document.getElementById(`${userType}-password-input`);
  let errorMessage = document.getElementById(`${userType}-error`);

  // Get user data from localStorage and parse it
  // let users = JSON.parse(localStorage.getItem("users"))[userType];
  let storedUsers = localStorage.getItem("users");

  if (!storedUsers) {
    console.error("No user data found in localStorage.");
    errorMessage.textContent = "Error: No user data available.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    return;
  }

  let users = JSON.parse(storedUsers);

  console.log("Stored Users: ", users);
  console.log("Checking for userType: ", userType);
  console.log("Users for this type: ", users[userType]);

  // Ensure userType exists in stored data
  if (!users[userType]) {
    console.error(`No users found for type: ${userType}`);
    errorMessage.textContent = `Error: No ${userType} accounts found.`;
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    return;
  }

  let userExits = users[userType].some(user => user.username === usernameInput.value && user.password === passwordInput.value);

  if (userExits) {
    errorMessage.style.display = "none"; // Hide error message
    let upperUserType = capitalizeFirstLetter(userType);
    alert(`Login successful! Redirecting to ${upperUserType} dashboard.`);
    if (upperUserType === "Student") {
      window.location.href = `../Student/Student.html`
    } else if (upperUserType === "Teacher") {
      window.location.href = `../Teacher/SideBarHtml/AssignmentTemplment.html`
    } else if (upperUserType === "Admin") {
      window.location.href = `../AdminPage/Admin.html`
    }
    // window.location.href = `${upperUserType}.html`; // Redirect to dashboard based on user type
  } else {
    errorMessage.textContent = "Invalid username or password. Please try again.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block"; // Show error message
  }
}

// Switch tabs  
// Used Chat GPT for this function
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

// Converts the first letter of a string to uppercase
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}