document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Handles changing between components
    const sections = document.querySelectorAll(".component-section");
    document.querySelectorAll(".component-link").forEach((link) => {
        link.addEventListener("click", () => {
            const target = link.dataset.target;

            // hide all components
            sections.forEach((section) => section.classList.add("hidden"));

            // show chosen component
            const targetSection = document.getElementById(target);
            if (targetSection) targetSection.classList.remove("hidden");
        });
    });

    // Button Component: Click
    const clickMeButton = document.querySelector(".active-btn");
    if (clickMeButton) {
        clickMeButton.addEventListener("click", () => {
            alert("Button Clicked!");
        });
    }

});
