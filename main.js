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

  // Check if the menu is opening or closing
  if (menu.classList.contains("menu-open")) {
    // Delay the slide-in of links until after the menu has fully dropped down
    setTimeout(() => {
      const links = document.querySelectorAll(".menu-content div");
      links.forEach((link, index) => {
        setTimeout(() => {
          link.style.opacity = "1";
          link.style.transform = "translateX(0)";
        }, index * 100); // Delay each link slightly for staggered effect
      });
    }, 500); // Wait for the menu drop down animation to complete
  } else {
    // Reset the links when closing the menu
    const links = document.querySelectorAll(".menu-content div");
    links.forEach((link) => {
      link.style.opacity = "0";
      link.style.transform = "translateX(100%)";
    });
  }
}
