/*
 * 
 * This script handles the functionality of the contact form, including
 * form submission and email sending using EmailJS.
 * 
 * Sources and Inspiration:
 * 1. EmailJS Documentation: https://www.emailjs.com/docs/
 * 2. "How to Make Working Contact Form using Javascript" by CodeHal:
 *    https://www.youtube.com/watch?v=IxziwuuaS3c
 * 3. "JavaScript Contact Form: Tutorial with Code Examples" by Mailtrap:
 *    https://mailtrap.io/blog/javascript-contact-form/
 * 4. Stack Overflow thread on contact forms:
 *    https://stackoverflow.com/questions/36141742/contact-form-with-javascript
 * 
 * The HTML structure for the contact form was inspired by examples from:
 * - Web3Forms: https://web3forms.com/platforms/javascript-contact-form
 * - Frontend Mentor challenge: https://www.frontendmentor.io/solutions/contact-form-html-css-javascript-FFH0Zt7dyB
 *
 */

(function() {
    // Initializing EmailJS with my user ID
    emailjs.init("vgyVJ5dRA_DpRw0GY"); 
})();

// Add event listener to the contact form for submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Send the form data using EmailJS
    emailjs.sendForm('service_yri41uh', 'template_tur4vxb', this)
        .then(function() {
            // If the email is sent successfully
            console.log('SUCCESS!');
            // Alert the user of successful submission
            alert('Message sent successfully!');
            // Reset the form fields
            document.getElementById('contact-form').reset();
        }, 
        function(error) {
            // If there's an error in sending the email
            console.log('FAILED...', error);
            // Alert the user of the failure
            alert('Failed to send message. Please try again.');
        });
});