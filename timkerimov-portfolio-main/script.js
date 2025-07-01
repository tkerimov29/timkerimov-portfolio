document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById("check");
    const navbar = document.getElementById('navbar');

    // Check for saved theme preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        checkbox.checked = true; // Keep the toggle checked if dark mode is active
    }

    // Toggle theme and save preference
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light"); // Save preference
        }
    });

    // Responsive Navbar Toggle
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1270) {
            navbar.classList.remove("active");
        }
    });

    // Custom Cursor Effect
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li');
    textElements.forEach(element => {
        element.addEventListener('mouseover', () => cursor.classList.add('hovered'));
        element.addEventListener('mouseout', () => cursor.classList.remove('hovered'));
    });
});
