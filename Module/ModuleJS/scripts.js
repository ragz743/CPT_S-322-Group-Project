const apiUrl = 'http://localhost:3000';

// Fetch and display all modules
async function fetchAndDisplayModules() {
    try {
        const response = await fetch(`${apiUrl}/modules`);
        const modules = await response.json();

        const modulesList = document.getElementById('modules-list');
        modulesList.innerHTML = ''; // Clear any previous modules

        // Loop through the modules and display them
        modules.forEach(module => {
            const moduleDiv = document.createElement('div');
            moduleDiv.classList.add('module');
            moduleDiv.innerHTML = `
                <h3>${module.title}</h3>
                <p>${module.content}</p>  <!-- Assuming content here -->
            `;
            modulesList.appendChild(moduleDiv);
        });
    } catch (error) {
        console.error('Error fetching modules:', error);
        alert('Error fetching modules');
    }
}

// Create a new module with title and content
async function createModule() {
    const moduleTitle = document.getElementById('moduleTitle').value;
    const moduleContent = document.getElementById('moduleItem').value;

    // Check if both fields are filled
    if (!moduleTitle || !moduleContent) {
        alert('Please fill out both the module title and content.');
        return;
    }

    const module = {
        title: moduleTitle,
        content: moduleContent
    };

    try {
        const response = await fetch(`${apiUrl}/createModule`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(module)
        });

        // Handle response from the server
        const responseData = await response.text(); // Get the response body text
        
        if (response.ok) {
            alert('Module created successfully!'); // Success alert
            fetchAndDisplayModules();  // Refresh the module list
        } else {
            alert('Error creating module: ' + responseData); // Show the error message from the server
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error creating module: ' + error.message); // Catch any network issues
    }
}

// Initialize by fetching and displaying modules
window.onload = () => {
    fetchAndDisplayModules();  // Fetch modules when the page loads
};
