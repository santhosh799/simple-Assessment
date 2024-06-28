document.addEventListener('DOMContentLoaded', function() {
    var introParagraph = document.getElementById('intro');
    var hours = new Date().getHours();
    var welcomeMessage;

    if (hours < 12) {
        welcomeMessage = "Good morning, Welcome to my personal page.";
    } else if (hours < 17) {
        welcomeMessage = "Good afternoon, Welcome to my personal page.";
    } else {
        welcomeMessage = "Good evening, Welcome to my personal page.";
    }

    introParagraph.textContent = welcomeMessage;
});

document.getElementById('action-button').addEventListener('click', function() {
    var introParagraph = document.getElementById('intro');
    introParagraph.textContent = "Experienced ReactJs Developer at Zakboys";

    var placeholderImage = document.getElementById('placeholder-img');
    placeholderImage.classList.toggle('border-toggle');

    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});
