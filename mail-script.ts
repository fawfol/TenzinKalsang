function clearForm() {function handleSubmit(event) {
            event.preventDefault(); // Prevent the default form submission
    
            const form = event.target;
    
            // Use Fetch API to submit the form data
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for your submission!'); // Optional: Show a success message
                    form.reset(); 
                } else {
                    alert('There was a problem with your submission. Please try again.'); // Optional: Show an error message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem with your submission. Please try again.'); // Optional: Show an error message
            });
    
            return false; // Prevent the default form submission
        }
        }