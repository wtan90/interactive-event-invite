// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Find the RSVP form by its ID and assign it to a variable
    var form = document.getElementById('rsvpForm');

    // Listen for the submit event on the form
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Get the value of the email field from the form
        var email = document.getElementById('email').value;

        // Get the value of the attendance field from the form
        var attendance = document.getElementById('attendance').value;

        // Find the confirmation message element
        var confirmationMessage = document.getElementById('confirmationMessage');

        // Get the body element to change the background
        var body = document.body; 

        // Check if the user selected 'yes' for attending and the email is a Gmail address
        if (attendance === 'yes' && email.endsWith('@gmail.com')) {
            // Set the confirmation message with a party emoji and a positive message
            confirmationMessage.innerHTML = '🎉 Thank you for your RSVP! We look forward to seeing you!';
            
            // Set the background image for attending users
            body.style.backgroundImage = "url('https://media.giphy.com/media/e1yiWMt3XJvP2/giphy.gif')";
            body.style.backgroundSize = "cover"; // Ensure the image covers the whole background
            body.style.backgroundPosition = "center"; // Center the background image
        } else if (attendance === 'no') {
            // Set a different message if the user is not attending
            confirmationMessage.innerHTML = 'We\'re sorry to hear you can\'t make it. Hope to see you next time!';
            
            // Reset the background if not attending
            body.style.backgroundImage = "";
        } else {
            // If the email is not a Gmail address, prompt the user to enter a valid Gmail address
            confirmationMessage.innerHTML = 'Please enter a valid Gmail address to RSVP.';
        }

        // Display the confirmation message
        confirmationMessage.style.display = 'block';
    });
});

        // Display the confirmation message
        confirmationMessage.style.display = 'block';
    });
});
