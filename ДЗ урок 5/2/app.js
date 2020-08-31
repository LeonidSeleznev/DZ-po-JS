'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click', function (event) {
        clickActivity(event);
    });
});

function clickActivity(clickedButton){
    const cardNode = clickedButton.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const buttonText  = card.button.innerText;
    if (buttonText === 'Подробнее') {
        showText(card);
    } else if (buttonText === 'Отмена') {
        hideText(card);
    }
}

function hideText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

function showText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda?';
    card.productName.insertAdjacentHTML('afterend', `<div class='desc'>${text}</div>`);
    card.button.innerText  = 'Отмена';
}