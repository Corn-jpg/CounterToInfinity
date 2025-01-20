let count = 0;

function updateCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Update the counter every second (1000 milliseconds)
setInterval(updateCounter, 1000);
