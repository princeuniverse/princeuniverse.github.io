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
        if (i === 0) return;

        let inputs = row.querySelectorAll("input");
        if (inputs.length < 2) return;

        let val = parseInt(inputs[0].dataset.val);

        let inVal = parseInt(inputs[0].value) || 0;
        let outVal = parseInt(inputs[1].value) || 0;

        let rowTotal = (inVal - outVal) * val;

        row.querySelector(".t").innerText = rowTotal;

        total += rowTotal;
    });

    document.getElementById("denoTotal").innerText = total;

    // sync with amount
    let amountBox = document.getElementById("amount");
    if (amountBox) amountBox.value = total;

    // update words
    if (typeof convertToWords === "function") {
        convertToWords();
    }
}
