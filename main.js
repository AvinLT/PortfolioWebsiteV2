// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");

  // Toggle the dropdown when clicking on the menu
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from propagating to the document
    this.classList.toggle("active");
  });

  // Close the dropdown if the user clicks outside of it
  document.addEventListener("click", function () {
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    }
  });
});
