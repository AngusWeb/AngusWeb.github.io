document.addEventListener("DOMContentLoaded", function () {
    // After the page loads, hide the animation and show the website content after 4 seconds
    setTimeout(function () {
        // Hide the animation
        document.querySelector(".animation").style.display = "none";

        // Remove the full-screen container entirely
        document.querySelector(".full-screen-container").remove();

        // Show the website content
        document.getElementById("website-content").style.display = "block";
    }, 3000); // 4 seconds (4000 milliseconds)

    let currentPage = 1;

    // Function to toggle between pages on scroll
    function togglePages() {
        const page1 = document.getElementById("page1");
        const page2 = document.getElementById("page2");
    
        if (currentPage === 1) {
            page1.style.opacity = 1;
            page2.style.opacity = 0;
        } else {
            page1.style.opacity = 0;
            page2.style.opacity = 1;
        }
    }
    
    // Event listener for scroll
    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            // Scrolling down
            navigateToPage(2);
        } else {
            // Scrolling up
            navigateToPage(1);
        }
    
        togglePages();
    });
    
    function navigateToPage(pageNumber) {
        if (pageNumber !== currentPage) {
            currentPage = pageNumber;
        }
    }
    
    // Initial setup
    togglePages();
    
    // Add transitionend event listener to reset opacity property after animation
    document.getElementById("page1").addEventListener("transitionend", function () {
        if (currentPage === 1) {
            document.getElementById("page2").style.opacity = 0;
        }
    });
    
    document.getElementById("page2").addEventListener("transitionend", function () {
        if (currentPage === 2) {
            document.getElementById("page1").style.opacity = 0;
        }
    });
});

let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

open.addEventListener("click", () => {
  overlay.style.transform = "translateY(0)";
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateY(-110%)";
});
