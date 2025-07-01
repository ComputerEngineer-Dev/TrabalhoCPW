// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorBtn');
    const title = document.querySelector('h1');

    button.addEventListener('click', function() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F033FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
    });
});