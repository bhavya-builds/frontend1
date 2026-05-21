// BUTTON ANIMATION

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


// PRODUCT CARD EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});