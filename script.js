document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector("#home");
    const heroCursor = document.querySelector(".hero-secondary");

    heroSection.addEventListener("mousemove", function (e) {
        const x = e.clientX - heroSection.offsetLeft;
        const y = e.clientY - heroSection.offsetTop;
        heroCursor.style.setProperty("--x", `${x}px`);
        heroCursor.style.setProperty("--y", `${y}px`);
    });

    heroSection.addEventListener("mouseleave", function () {
        heroCursor.style.opacity = 0;
    });

    heroSection.addEventListener("mouseenter", function () {
        heroCursor.style.opacity = 1;
    });

    // Slider functionality
    let slideIndex = 0;

    function moveSlide(step) {
        const slides = document.querySelectorAll(".slide");
        slideIndex += step;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        const slider = document.querySelector(".slider");
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Link redirects for each domain image
    document.getElementById("aws-link").onclick = function () {
        window.location.href = "aws-link.html"; // Replace with actual link
    };
    document.getElementById("dsa-link").onclick = function () {
        window.location.href = "dsa-link.html"; // Replace with actual link
    };
    document.getElementById("prompt-link").onclick = function () {
        window.location.href = "prompt-link.html"; // Replace with actual link
    };

    // Add click event to navigation arrows
    document.querySelector(".prev").addEventListener("click", function() {
        moveSlide(-1);
    });
    document.querySelector(".next").addEventListener("click", function() {
        moveSlide(1);
    });
});
// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

//javascript for Competition Part //

document.querySelector('.techy-section').addEventListener('mouseover', function() {
    document.getElementById('techyImage').style.display = 'block';
});

document.querySelector('.techy-section').addEventListener('mouseleave', function() {
    document.getElementById('techyImage').style.display = 'none';
});

document.querySelector('.cultural-section').addEventListener('mouseover', function() {
    document.getElementById('culturalImage').style.display = 'block';
});

document.querySelector('.cultural-section').addEventListener('mouseleave', function() {
    document.getElementById('culturalImage').style.display = 'none';
});



