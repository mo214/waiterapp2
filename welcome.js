// JavaScript to fade in the welcome text and fade out after a delay
document.addEventListener('DOMContentLoaded', function() {
    // Get the welcome text element
    const welcomeText = document.getElementById('welcome');

    // Fade in the welcome text
    setTimeout(() => {
        welcomeText.style.opacity = '1';
    }, 100);

    // Fade out after 3 seconds
    setTimeout(() => {
        welcomeText.style.opacity = '0';
    }, 3000);
});
