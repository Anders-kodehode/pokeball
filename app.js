const ball = document.querySelector('.ball');
const innerButton = document.querySelector('.inner-button');

ball.addEventListener('click', function(e) {
    e.preventDefault;

    ball.classList.remove('ball');

    void ball.offsetWidth;

    ball.classList.add('ball');
}, false);

innerButton.addEventListener('click', function(e) {
    e.preventDefault;

    innerButton.classList.remove('inner-button');

    void innerButton.offsetWidth;

    innerButton.classList.add('inner-button');
}, false);