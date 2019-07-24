document.querySelector('.price-button').addEventListener('mouseover', function(ev) {
    ev.currentTarget.classList.add('frst-btn');
    document.querySelector('.price-button2').classList.add('scnd-btn');
});

document.querySelector('.price-button2').addEventListener('mouseout', function(ev) {
    ev.currentTarget.classList.remove('scnd-btn');
    ev.currentTarget.classList.add('frst-btn');
    document.querySelector('.price-button').classList.remove('frst-btn');
});

document.querySelector('.price-button-1').addEventListener('mouseover', function(ev) {
    ev.currentTarget.classList.add('frst-btn');
    document.querySelector('.price-button2-1').classList.add('scnd-btn');
});

document.querySelector('.price-button2-1').addEventListener('mouseout', function(ev) {
    ev.currentTarget.classList.remove('scnd-btn');
    ev.currentTarget.classList.add('frst-btn');
    document.querySelector('.price-button-1').classList.remove('frst-btn');
});

document.querySelector('.price-button-2').addEventListener('mouseover', function(ev) {
    ev.currentTarget.classList.add('frst-btn');
    document.querySelector('.price-button2-2').classList.add('scnd-btn');
});

document.querySelector('.price-button2-2').addEventListener('mouseout', function(ev) {
    ev.currentTarget.classList.remove('scnd-btn');
    ev.currentTarget.classList.add('frst-btn');
    document.querySelector('.price-button-2').classList.remove('frst-btn');
});

