const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Baby please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok.. ok.. fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (messageIndex >= 9) {
        window.location.href = "no_page.html"; // Redirects on the 10th click
        return;
    }
    
    noButton.textContent = messages[messageIndex];
    messageIndex++;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
