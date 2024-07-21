document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");
  // const successAlert = document.getElementById("success");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Create a data object to send via AJAX
    const formData = {
      name: name,
      email: email,
      phone: phone,
      service: service,
      message: message,
    };

    // Send the data to the server using AJAX
    $.ajax({
      type: "POST",
      url: "../php/save_details.php",
      data: formData,
      success: function () {
        // Display a success message on the page
        const successDiv = document.getElementById("success");
        successDiv.removeAttribute("hidden");
      },
    });

    // Clear the form fields (optional)
    form.reset();
  });
});
