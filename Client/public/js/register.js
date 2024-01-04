 function registerAdmin() {

    console.log('test');
    // Get form data
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const isAdmin = document.getElementById('isAdmin').checked;
  
    // Create a FormData object
    const formData = new FormData();
    formData.append('adminUsername', adminUsername);
    formData.append('adminPassword', adminPassword);
    formData.append('isAdmin', isAdmin);
  
    // Send a POST request to the server
    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('User registered successfully:', data);
      // Optionally, redirect the user or perform other actions
    })
    .catch(error => {
      console.error('Error registering user:', error);
      // Handle errors, show an alert, etc.
    });
  }