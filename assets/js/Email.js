// Initialize EmailJS (replace 'your_public_key' with your actual Public Key from EmailJS)
emailjs.init("your_public_key");

// Contact form submission
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Send form data using EmailJS
  emailjs
    .sendForm("service_7oqhoe7", "your_template_id", form)
    .then(
      function (response) {
        alert("Message sent successfully!"); // Success message
        form.reset(); // Reset the form
      },
      function (error) {
        alert("Failed to send message. Please try again."); // Error message
        console.error("EmailJS Error:", error);
      }
    );
});