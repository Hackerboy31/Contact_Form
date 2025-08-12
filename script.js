document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMsg = document.querySelector(".success-message");

  let isValid = true;

  // Reset messages
  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
  successMsg.textContent = "";

  // Name validation
  if (name.value.trim() === "") {
    name.nextElementSibling.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    email.nextElementSibling.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    email.nextElementSibling.textContent = "Enter a valid email.";
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    message.nextElementSibling.textContent = "Message is required.";
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.textContent = "✅ Your message has been sent successfully!";
    document.getElementById("contactForm").reset();
  }
});
