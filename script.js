function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            // Load page-specific JS
            loadPageScript(page);
        })
        .catch(err => {
            document.getElementById("content").innerHTML = "<h2>Page not found</h2>";
            console.error(err);
        });
}

function toggleDropdown() {
    let menu = document.getElementById("transactionMenu");
    let arrow = document.querySelector(".arrow");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        arrow.classList.remove("rotate");
    } else {
        menu.style.display = "block";
        arrow.classList.add("rotate");
    }
}

