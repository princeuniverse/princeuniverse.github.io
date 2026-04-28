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


function loadPage(page) {
    let content = document.getElementById("content");

    if (page === "deposit") {
        content.innerHTML = `

        <h1>Deposit Form</h1>

        <div class="form-box">

            <label>Account Number</label>
            <input type="text" id="acc">

            <label>Customer Name</label>
            <input type="text" id="name">

            <label>Contact No.</label>
            <input type="text" id="contact">

            <label>Amount</label>
            <input type="number" id="amount" oninput="convertToWords(); calcDenomination();">

            <label>Amount in Words</label>
            <input type="text" id="words" readonly>

            <label>Denomination Details</label>

            <div class="deno-box">
                <table>
                    <tr>
                        <th>Note</th>
                        <th>In</th>
                        <th>Out</th>
                        <th>Total</th>
                    </tr>

                    ${createRow(500)}
                    ${createRow(200)}
                    ${createRow(100)}
                    ${createRow(50)}
                    ${createRow(20)}
                    ${createRow(10)}
                    ${createRow(5)}
                    ${createRow("Coins")}

                </table>
            </div>

            <label>Remarks</label>
            <textarea></textarea>

            <div class="btn-group">
                <button onclick="saveData()">Save</button>
                <button onclick="window.print()">Print</button>
                <button onclick="resetForm()">Reset</button>
            </div>

        </div>
        `;
    }

    else {
        content.innerHTML = `<h1>${page.toUpperCase()}</h1>`;
    }
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





function createRow(value) {
    return `
    <tr>
        <td>${value}</td>
        <td><input type="number" value="0" oninput="calcDenomination()"></td>
        <td><input type="number" value="0" oninput="calcDenomination()"></td>
        <td class="rowTotal">0</td>
    </tr>`;
}

function calcDenomination() {
    let rows = document.querySelectorAll(".deno-box table tr");
    let total = 0;

    rows.forEach((row, index) => {
        if (index === 0) return;

        let value = row.cells[0].innerText;
        let inVal = row.cells[1].querySelector("input").value || 0;
        let outVal = row.cells[2].querySelector("input").value || 0;

        let noteValue = isNaN(value) ? 1 : parseInt(value);

        let rowTotal = (inVal - outVal) * noteValue;
        row.cells[3].innerText = rowTotal;

        total += rowTotal;
    });

    document.getElementById("amount").value = total;
    convertToWords();
}

function convertToWords() {
    let num = document.getElementById("amount").value;

    if (!num) return;

    let words = numberToWords(num);
    document.getElementById("words").value = words + " only";
}

function numberToWords(num) {
    let a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    let b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num < 20) return a[num];

    if (num < 100)
        return b[Math.floor(num / 10)] + " " + a[num % 10];

    if (num < 1000)
        return a[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);

    if (num < 100000)
        return numberToWords(Math.floor(num / 1000)) + " Thousand " + numberToWords(num % 1000);

    return num;
}

function resetForm() {
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.querySelectorAll(".rowTotal").forEach(i => i.innerText = "0");
}

function saveData() {
    alert("Data Saved (demo)");
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

