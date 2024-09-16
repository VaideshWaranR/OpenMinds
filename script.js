document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form (basic example)
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    // Display a success message (you can also send form data to a server)
    document.getElementById('responseMessage').innerText = `Thank you, ${name}! We have received your message.`;

    // Clear form fields
    document.getElementById('contactForm').reset();
});
