document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const dockLinks = document.querySelectorAll(".dock a");

  dockLinks.forEach(link => {
    link.classList.remove("dock-active");
  });

  dockLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    if (linkPath === currentPath) {
      link.classList.add("dock-active");
    }
    else if (linkPath === currentPath.substring(1) && currentPath.startsWith('/')) {
       link.classList.add("dock-active");
    }
    else if (currentPath === '/' && (linkPath === '/index.html' || linkPath === '/')) {
        if (link.getAttribute('href') === '/') {
           link.classList.add("dock-active");
        }
    }
  });
});