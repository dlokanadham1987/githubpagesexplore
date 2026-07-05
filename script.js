// Simple interactive demo for the GitHub Pages sample site.
(function () {
    "use strict";

    var greetings = [
        "Hello from GitHub Pages!",
        "Hi there — served straight from a Git repo.",
        "Greetings! This page is static, but JS still runs.",
        "Welcome! Free hosting, courtesy of GitHub."
    ];

    var greetBtn = document.getElementById("greetBtn");
    var greetMsg = document.getElementById("greetMsg");
    if (greetBtn && greetMsg) {
        greetBtn.addEventListener("click", function () {
            var pick = greetings[Math.floor(Math.random() * greetings.length)];
            greetMsg.textContent = pick;
        });
    }

    // Counter demo
    var count = 0;
    var countVal = document.getElementById("countVal");
    var incBtn = document.getElementById("incBtn");
    var decBtn = document.getElementById("decBtn");

    function render() {
        if (countVal) countVal.textContent = String(count);
    }
    if (incBtn) incBtn.addEventListener("click", function () { count++; render(); });
    if (decBtn) decBtn.addEventListener("click", function () { count--; render(); });

    // Live time
    var timeEl = document.getElementById("timeStamp");
    function tick() {
        if (!timeEl) return;
        var now = new Date();
        timeEl.textContent = "Page loaded live at: " + now.toLocaleString();
    }
    tick();
    setInterval(tick, 1000);
})();
