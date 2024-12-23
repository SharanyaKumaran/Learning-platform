document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
  } else {
    alert("Login Successful!");
    window.location.href = "dashboard.html"; // Redirect to the dashboard
  }
});

document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
    } else {
      alert("Registration Successful!");
      window.location.href = "login.html"; // Redirect to the login page
    }
  });

// CRUD Operations Interactivity
const editButtons = document.querySelectorAll(".btn-primary");
const deleteButtons = document.querySelectorAll(".btn-danger");

editButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Edit functionality coming soon!");
  });
});

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this course?")) {
      btn.closest(".col-md-4").remove();
    }
  });
});
// Signup Form Validation
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsCheck = document.getElementById("termsCheck").checked;

  if (!fullName || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  if (!termsCheck) {
    alert("You must agree to the Terms and Conditions.");
    return;
  }

  alert("Signup Successful!");
  window.location.href = "login.html"; // Redirect to login page
});
