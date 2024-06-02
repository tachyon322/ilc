const button1 = document.querySelector(".plan-btn1");
const button2 = document.querySelector('.plan-btn2');

button1.addEventListener('click', () => {
    button2.style.backgroundColor = 'transparent';
    button2.style.color = '#273895';

    button1.style.backgroundColor = '#273895';
    button1.style.color = 'white';
});

button2.addEventListener('click', () => {
    button1.style.backgroundColor = 'transparent';
    button1.style.color = '#273895';

    button2.style.backgroundColor = '#273895';
    button2.style.color = 'white';
    button2.style.fontWeight = '400';
});