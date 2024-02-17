document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('rsvpForm');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the email and attendance values from the form
        var email = document.getElementById('email').value;
        var attendance = document.getElementById('attendance').value;

        // Locate the confirmation message element
        var confirmationMessage = document.getElementById('confirmationMessage');

        // Get the body element to potentially change the background
        var body = document.body;

        // Set styles for the confirmation message to ensure visibility and readability
        confirmationMessage.style.position = 'fixed';
        confirmationMessage.style.left = '50%';
        confirmationMessage.style.top = '50%';
        confirmationMessage.style.transform = 'translate(-50%, -50%)';
        confirmationMessage.style.backgroundColor = 'rgba(255,255,255,0.8)';
        confirmationMessage.style.padding = '20px';
        confirmationMessage.style.borderRadius = '10px';
        confirmationMessage.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        confirmationMessage.style.zIndex = '1000'; // Ensure it's above other elements

        if (attendance === 'yes' && email.endsWith('@gmail.com')) {
            confirmationMessage.innerHTML = '🎉 Thank you for your RSVP! We look forward to seeing you!';
            // Set the background image for attendees
            body.style.backgroundImage = "url('https://media.giphy.com/media/e1yiWMt3XJvP2/giphy.gif')";
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center";
        } else if (attendance === 'no') {
            confirmationMessage.innerHTML = 'We\'re sorry to hear you can\'t make it. Hope to see you next time!';
            // Remove the background image for non-attendees
            body.style.backgroundImage = "";
        } else {
            // If the email is not a Gmail address or another error occurs
            confirmationMessage.innerHTML = 'Please enter a valid Gmail address to RSVP.';
        }

        // Display the confirmation message and automatically hide it after 5 seconds
        confirmationMessage.style.display = 'block';
        setTimeout(function() {
            confirmationMessage.style.display = 'none';
        }, 5000);
    });
});
