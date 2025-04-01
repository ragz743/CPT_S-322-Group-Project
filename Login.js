function validateLogin(event, role) {
  event.preventDefault();

  // Sample credentials (replace with database validation in real applications)
  const credentials = {
    student: { username: "student123", password: "password1" },
    teacher: { username: "teacher456", password: "password2" },
    admin: { username: "admin789", password: "password3" }
  };

  let usernameInput = document.getElementById('${role}-username-input').value;
  let passwordInput = document.getElementById('${role}-password-input').value;
  let errorMessage = document.getElementById('${role}-error');

  if (usernameInput === credentials[role].username && passwordInput === credentials[role].password) {
    alert("Login successful!");
    errorMessage.textContent = "";
    window.location.href = credentials[role].redirect; // Redirect to respective page
    return true;
  } else {
    errorMessage.textContent = "Invalid username or password. Please try again.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    return false;
  }
}

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