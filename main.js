// Select the dropdown button and menu
const dropdownBtn = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".content");

// Function to toggle the visibility of the dropdown menu
const toggleDropdownVisibility = function () {
  dropdownMenu.classList.toggle("show");
};

// Event listener to toggle the dropdown open/close when the button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent the event from propagating to parent elements
  toggleDropdownVisibility();
});

// Event listener to close the dropdown when clicking outside of it
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdownVisibility();
  }
});

// Event listener to close the dropdown when a link inside it is clicked
dropdownMenu.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent the document click listener from closing the menu
  toggleDropdownVisibility(); // Close the dropdown after a selection is made
});

function toggleMenu() {
  const menu = document.getElementById("fullpageMenu");
  menu.classList.toggle("menu-open");
}
