function convertToWords() {
    let amount = document.getElementById("amount").value || 0;
    document.getElementById("words").value = numberToWords(amount);
}

function numberToWords(num) {
    if (num === 0) return "Zero Rupees Only";

    let a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"];

    let b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convert(n) {
        if (n < 20) return a[n];
        if (n < 100) return b[Math.floor(n / 10)] + " " + a[n % 10];
        if (n < 1000) return a[Math.floor(n / 100)] + " Hundred " + convert(n % 100);
        if (n < 100000) return convert(Math.floor(n / 1000)) + " Thousand " + convert(n % 1000);
        if (n < 10000000) return convert(Math.floor(n / 100000)) + " Lakh " + convert(n % 100000);
        return convert(Math.floor(n / 10000000)) + " Crore " + convert(n % 10000000);
    }

    return convert(num).trim() + " Rupees Only";
}


const supabaseUrl = "https://kgmiodfxarvzpghukxta.supabase.co";
const supabaseKey = "sb_publishable_veuyyZNzMDIPJK0Cja3f8g_5DllUCim";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
