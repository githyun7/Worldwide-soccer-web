// Select all dropdown buttons
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropbtn');
    const menu = dropdown.querySelector('.dropdown-content');

    // Toggle dropdown on click
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent link navigation
        // Close others
        closeAllDropdowns(dropdown);
        // Toggle current
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
});

// Close all except the current one
function closeAllDropdowns(currentDropdown) {
    dropdowns.forEach(dropdown => {
        if (dropdown !== currentDropdown) {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        }
    });
}

// Close dropdowns if clicking outside
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    }
});
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}