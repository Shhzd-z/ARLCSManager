// Function to get the next countdown date based on Feb 15 as the starting point
function getNextCountdownDate() {
    const now = new Date();
    const year = now.getFullYear();
    
    // Define the fixed cycle months (Feb, May, Aug, Nov)
    const cycleMonths = [1, 4, 7, 10]; // Months are 0-indexed (Feb = 1, May = 4, etc.)
    
    let nextDate;
    
    // Find the next upcoming cycle date
    for (let month of cycleMonths) {
        nextDate = new Date(year, month, 15, 23, 59, 59, 999);
        if (nextDate.getTime() > now.getTime()) {
            return nextDate.getTime(); // Return the next valid date
        }
    }

    // If all months have passed, set to next year's February 15
    return new Date(year + 1, 1, 15, 23, 59, 59, 999).getTime();
}

// Initialize countdown date
let countDownDate = getNextCountdownDate();

// Update the countdown every second
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, reset to the next cycle (every 3 months)
    if (distance < 0) {
        countDownDate = getNextCountdownDate(); // Get new countdown date
    }
}, 1000);