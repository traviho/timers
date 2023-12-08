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

