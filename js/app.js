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
    // Modal Component: Open and close handlers
    const openModalButton = document.querySelector(".open-modal-btn");
    const closeModalButton = document.querySelector(".close-btn");
    const modal = document.getElementById("modal");

    if (openModalButton && modal) {
        openModalButton.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    if (closeModalButton && modal) {
        closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside the content
    if (modal) {
        window.addEventListener("click", (event) => {
            if (event.target === modal) modal.style.display = "none";
        });
    }
});
