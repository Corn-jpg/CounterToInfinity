// Retrieve the count from localStorage or start at 0
let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

// Function to update the timer
function updateTimer() {
    count++;
    document.getElementById('timer').innerText = count;
    // Save the current count to localStorage
    localStorage.setItem('count', count);
}

// Update the timer every second (1000 milliseconds)
setInterval(updateTimer, 1000);

// Display the current count on page load
document.getElementById('timer').innerText = count;

