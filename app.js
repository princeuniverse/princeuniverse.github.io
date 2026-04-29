// LOAD PAGE
function loadPage(page, el) {
 
    document.getElementById("content").innerHTML = "Loading...";
       fetch(`form/${page}.html`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            loadScript(page);
            setActive(el);
        });

}

// LOAD PAGE-SPECIFIC JS
function loadScript(page) {

    let old = document.getElementById("pageScript");
    if (old) old.remove();

    let script = document.createElement("script");
    script.src = `js/${page}.js`;
    script.id = "pageScript";

    document.body.appendChild(script);
}

// ACTIVE MENU
function setActive(el) {
    document.querySelectorAll(".menu-item, .submenu div")
        .forEach(i => i.classList.remove("active"));

    if (el) el.classList.add("active");
}

// DROPDOWN (Transactions)

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("transactionBtn");
    const menu = document.getElementById("transactionMenu");
    const arrow = btn.querySelector(".arrow");

    btn.addEventListener("click", function () {

        let isOpen = menu.style.display === "block";

        menu.style.display = isOpen ? "none" : "block";

        // rotate arrow
        arrow.classList.toggle("rotate", !isOpen);
    });


    loadPage("home"); // default page
 });


