var els = {
    first: document.querySelector('.first'),
    second: document.querySelector('.second'),
    third: document.querySelector('.third')
};

var klasses = ['animateReset', 'animateLeft', 'animateUp', 'animateDown', 'animateRight'];

function kickOff() {
    setTimeout(function() {
        els.first.classList.add('animateLeft');
        els.second.classList.add('animateReset');
    }, 1000);

    setTimeout(function() {
        els.second.classList.remove('animateReset');
        els.second.classList.add('animateUp');
        els.third.classList.add('animateReset');
    }, 3000);

    setTimeout(function() {
        els.third.classList.remove('animateReset');
        els.third.classList.add('animateDown');
        els.second.classList.add('animateReset');
    }, 5000);

    setTimeout(function() {
        els.second.classList.remove('animateReset', 'animateUp');
        els.second.classList.add('animateRight');
        els.first.classList.add('animateReset');
        for(var x in els){
            for(var i = 0; i < klasses.length; i++){
                els[x].classList.remove(klasses[i]);
            }
        }
    }, 7000);
}

kickOff();
setInterval(kickOff, 9000);