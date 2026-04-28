document.getElementById("amount").addEventListener("input", function () {
    let val = this.value;
    document.getElementById("words").value = val + " rupees only";
});

function resetForm() {
    document.querySelectorAll(".form-card input").forEach(i => i.value = "");
}
