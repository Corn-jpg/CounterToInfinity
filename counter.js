let count = 0;

function updateTimer() {
    count++;
    document.getElementById('timer').innerText = count;
}

// Update the timer every second (1000 milliseconds)
setInterval(updateTimer, 1000);
