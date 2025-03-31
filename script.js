// Select all buttons inside the dock container
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dock button");
  
    // Add click event listener to each button
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove 'dock-active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove("dock-active"));
  
        // Add 'dock-active' class to the clicked button
        button.classList.add("dock-active");
      });
    });
  });