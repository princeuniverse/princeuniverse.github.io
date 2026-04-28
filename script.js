function loadPage(page) {
    let content = document.getElementById("content");
 content.innerHTML = `<h1>${page.toUpperCase()}</h1><p>Content for ${page}</p>`;
}
    if (page === "home") {
        content.innerHTML = `
            <h1>Dashboard Overview</h1>
            <div class="cards">
                <div class="card"><h3>Total Sales</h3><p>₹45,000</p></div>
                <div class="card"><h3>Users</h3><p>120</p></div>
                <div class="card"><h3>Orders</h3><p>75</p></div>
            </div>
        `;
    }

    if (page === "analytics") {
        content.innerHTML = `<h1>Analytics</h1><p>Charts coming soon...</p>`;
    }

    if (page === "users") {
        content.innerHTML = `<h1>Users</h1><p>User list here...</p>`;
    }

    if (page === "settings") {
        content.innerHTML = `<h1>Settings</h1><p>Settings panel...</p>`;
    }
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

