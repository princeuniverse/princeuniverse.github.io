function initDepositPage() {

    loadTable();

    setTimeout(() => {
        let amountBox = document.getElementById("amount");

        if (amountBox) {
            amountBox.addEventListener("input", convertToWords);
        }
    }, 200);
}

function resetForm() {
    document.querySelectorAll(".form-compact input").forEach(i => i.value = "");
}


function calcDeno() {
    let rows = document.querySelectorAll(".deno-compact table tr");
    let total = 0;

    rows.forEach((row, i) => {
        if (i === 0) return;

        let cells = row.querySelectorAll("td");
        if (cells.length < 4) return;

        let note = parseInt(cells[0].innerText) || 1;

        let inVal = parseInt(cells[1].querySelector("input").value) || 0;
        let outVal = parseInt(cells[2].querySelector("input").value) || 0;

        let rowTotal = (inVal - outVal) * note;

        cells[3].innerText = rowTotal;

        total += rowTotal;
    });

    document.getElementById("denoTotal").innerText = total;

}


async function loadTable() {

    let table = document.querySelector("#depositTable tbody");
    table.innerHTML = "";

    const { data, error } = await  window.supabaseClient
       .from('TPD')
        .select('*')
        .order('id', { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    let sr = 1;

    data.forEach(d => {

        let row = `
        <tr>
            <td>${sr++}</td>
            <td>${d.account_no}</td>
            <td>${d.customer_name}</td>
            <td>₹ ${d.amount}</td>
            <td>${d.posted_at}</td>
            <td style="color:green;">${d.status}</td>
        </tr>
        `;

        table.innerHTML += row;
    });
}



async function saveDeposit() {

    // GET VALUES
    let acc = document.getElementById("acc").value.trim();
    let name = document.getElementById("name").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let amount = document.getElementById("amount").value.trim();

    // BASIC VALIDATION
    if (!acc || !name || !amount) {
        alert("Fill required fields");
        return;
    }

    // TIME
    let time = new Date().toLocaleTimeString();

    // INSERT INTO DB
    const { data, error } = await  window.supabaseClient
       .from('TPD')
        .insert([
            {
                account_no: acc,
                customer_name: name,
                contact_no: contact,
                amount: amount,
                status: "Success",
                posted_at: time
            }
        ]);

    if (error) {
        console.error(error);
        alert("❌ Save failed");
        return;
    }

    alert("✅ Saved successfully");

    // RESET FORM (optional)
    document.querySelectorAll(".form-compact input").forEach(i => i.value = "");

    // RELOAD TABLE
    loadTable();
}





