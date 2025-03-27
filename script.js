const menuBtn = document.getElementById("navbar__menu-btn");
const closeBtn = document.getElementById("navbar__close-btn");
const sidebar = document.querySelector('.sidebar')


const showSidebar = (event) => {
    event.preventDefault(); // prevent unintended closing
    sidebar.classList.add("show");
}

const hideSidebar = (event) => {
    event.preventDefault();
    sidebar.classList.remove("show");
}

menuBtn.addEventListener('click', showSidebar);
closeBtn.addEventListener('click', hideSidebar);
document.addEventListener("DOMContentLoaded", hideSidebar);