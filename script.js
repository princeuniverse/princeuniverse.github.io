function loadPage(page) {
    let content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = "<h1>Home</h1><p>This is home page</p>";
    } 
    else if (page === "about") {
        content.innerHTML = "<h1>About</h1><p>This is about page</p>";
    } 
    else if (page === "contact") {
        content.innerHTML = "<h1>Contact</h1><p>This is contact page</p>";
    }
}
