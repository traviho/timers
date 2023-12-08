function countdown(n) {
    var timer = setInterval(function() {
        n -= 1;
        if (n == 0) {
            clearInterval(timer)
            console.log("DONE!")
        } else {
            console.log(n)
        }
    }, 1000)
}

function countdownFromInput() {
    const value = Number(document.getElementById("countdown-input").value);
    if (value == "" || isNaN(value)) {
        alert("You must enter a valid number of seconds");
    } else {
        countdown(value);
        document.getElementById("countdown-input").value = ""
    }
}

function randomGame() {
    count = 0
    var timer = setInterval(function() {
        count += 1;
        num = Math.random();
        if (num > 0.75) {
            clearInterval(timer)
            console.log("it took", count, "tries")
        }
    }, 1000)
}