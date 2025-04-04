document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const dockLinks = document.querySelectorAll(".dock a");

  // Remove active class from all links initially
  dockLinks.forEach(link => {
    link.classList.remove("dock-active");
  });

  dockLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    if (linkPath === currentPath) {
      link.classList.add("dock-active");
    }
    // Handle cases where a leading slash might be missing or extra
    else if (linkPath === currentPath.substring(1) && currentPath.startsWith('/')) {
       link.classList.add("dock-active");
    }
    // Handle the root path case
    else if (currentPath === '/' && (linkPath === '/index.html' || linkPath === '/')) {
        if (link.getAttribute('href') === '/') {
           link.classList.add("dock-active");
        }
    }
  });
});