var getClass = document.getElementById("ci").classList.contains("active");
var changeText = document.getElementById("oneaaaaa");

if(getClass == true) {
    changeText.style.color = "orange";
    changeText.style.fontSize = "30px";
}

// Sticky navbar

const stickyNav = document.querySelector(".nav-sti");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", '');
stickyNav.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    stickyNav.classList.toggle("sticking", !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);