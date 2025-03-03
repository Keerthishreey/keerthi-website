function flipCard(card) {
    card.classList.toggle("flipped");
}

document.querySelector("#contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent successfully!");
});
