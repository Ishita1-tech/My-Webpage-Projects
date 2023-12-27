<form id="contactForm">
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" required></textarea>

<button type="button" id="submitButton">Submit</button>
</form>

<script>
document.getElementById('submitButton').addEventListener('click', function() {
    submitForm();
});

function submitForm() {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate input
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display submitted information in the console (you can replace this with your desired action)
    console.log("Submitted Information:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
</script>