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
    
    // Dropdown Component: Toggle visibility
    const dropdownButton = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener("click", () => {
            dropdownMenu.classList.toggle("open");
        });

        // Close dropdown when clicking outside
        window.addEventListener("click", (event) => {
            if (event.target !== dropdownMenu && event.target !== dropdownButton) {
                dropdownMenu.classList.remove("open");
            }
        });
    }

    // Alert Component: Close alerts
    document.querySelectorAll(".alert-close").forEach((button) => {
        button.addEventListener("click", (event) => {
            const alert = event.target.parentElement;
            alert.style.opacity = 0; // Smooth fade-out
            setTimeout(() => alert.remove(), 300); // Remove after fade-out
        });
    });

     // Tooltip Component: Initialize tooltips
     document.querySelectorAll(".tooltip-target").forEach((target) => {
        const tooltip = document.createElement("div");
        tooltip.className = `tooltip tooltip-${target.dataset.position}`;
        tooltip.textContent = target.dataset.tooltip;
        target.appendChild(tooltip);

        // Show/hide tooltip on hover
        target.addEventListener("mouseenter", () => (tooltip.style.opacity = 1));
        target.addEventListener("mouseleave", () => (tooltip.style.opacity = 0));
    });

    // Toast Component: Show and hide toast messages
    const toastContainer = document.getElementById("toast-messages");

    function showToast(message, type) {
        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span>${message}</span>
            <button class="toast-close">&times;</button>
        `;

        // Add close functionality
        toast.querySelector(".toast-close").addEventListener("click", () => {
            toast.remove();
        });

        // Auto-remove toast after 5 seconds
        setTimeout(() => toast.remove(), 5000);

        toastContainer.appendChild(toast);
    }

    document.getElementById("show-toast-success")?.addEventListener("click", () => {
        showToast("This is a success toast!", "success");
    });

    document.getElementById("show-toast-error")?.addEventListener("click", () => {
        showToast("This is a error toast!", "error");
    });

    document.getElementById("show-toast-info")?.addEventListener("click", () => {
        showToast("This is a info toast!", "info");
    });

    // Navbar Component: Toggle navbar menu (mobile)
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener("click", () => {
            navbarMenu.classList.toggle("open");
        });
    }
});
