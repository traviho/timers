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