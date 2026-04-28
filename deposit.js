document.getElementById("amount").addEventListener("input", function () {
    let val = this.value;
    document.getElementById("words").value = val + " rupees only";
});

function resetForm() {
    document.querySelectorAll(".form-card input").forEach(i => i.value = "");
}


function calcDeno() {
    let rows = document.querySelectorAll(".deno-compact table tr");
    let total = 0;

    rows.forEach((row, i) => {
        if (i === 0) return; // skip header

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

    // sync amount
    let amountBox = document.getElementById("amount");
    if (amountBox) amountBox.value = total;
}
