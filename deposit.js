document.getElementById("amount").addEventListener("input", function () {
    let val = this.value;
    document.getElementById("words").value = numberToWords(val);
});

function saveDeposit() {
    alert("Deposit Saved (demo)");
}
