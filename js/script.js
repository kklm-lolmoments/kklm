let dots = 4;
let sliderElem = document.querySelector('.slider');
let dotElems = sliderElem.querySelectorAll('.slider__dot');
let indicatorElem = sliderElem.querySelector('.slider__indicator');

Array.prototype.forEach.call(dotElems, dotElem => {

  dotElem.addEventListener('click', e => {

    let currentPos = parseInt(sliderElem.getAttribute('data-pos'));
    let newPos = parseInt(dotElem.getAttribute('data-pos'));

    let newDirection = newPos > currentPos ? 'right' : 'left';
    let currentDirection = newPos < currentPos ? 'right' : 'left';

    indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator--${newDirection}`);
    sliderElem.setAttribute('data-pos', newPos);

  });

});

let dots1 = 4;
let sliderElem1 = document.querySelector('.slider1');
let dotElems1 = sliderElem1.querySelectorAll('.slider1__dot');
let indicatorElem1 = sliderElem1.querySelector('.slider1__indicator');

Array.prototype.forEach.call(dotElems1, dotElem1 => {

  dotElem1.addEventListener('click', e => {

    let currentPos1 = parseInt(sliderElem1.getAttribute('data-pos1'));
    let newPos1 = parseInt(dotElem1.getAttribute('data-pos1'));

    let newDirection1 = newPos1 > currentPos1 ? 'right' : 'left';
    let currentDirection1 = newPos1 < currentPos1 ? 'right' : 'left';

    indicatorElem1.classList.remove(`slider1__indicator--${currentDirection1}`);
    indicatorElem1.classList.add(`slider1__indicator--${newDirection1}`);
    sliderElem1.setAttribute('data-pos1', newPos1);

  });

});