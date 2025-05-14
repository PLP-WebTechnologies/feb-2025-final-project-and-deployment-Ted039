document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle with Persistence
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });

    // Booking Form Validation
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const room = document.getElementById("room").value;

        if (!name || !email) {
            alert("Please fill in all fields!");
            return;
        }

        alert(`Thank you ${name}! Your booking for ${room} is confirmed.`);
    });

    // Image Lightbox Functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            lightboxImage.src = this.src; // Get image source dynamically
            lightbox.style.display = "block";
        });
    });

    document.querySelector(".close").addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
