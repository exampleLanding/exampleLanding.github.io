var frstFfMenu = document.getElementById('frst-ff-menu');
frstFfMenu.addEventListener('click', function() {
    frstFfMenu.classList.remove('ff-menu');
    frstFfMenu.classList.add('ff-menu-active');
    var prev0Menu = document.getElementById('scnd-ff-menu');
    if (prev0Menu.classList.contains('ff-menu-active') == true) {
        prev0Menu.classList.remove('ff-menu-active');
        prev0Menu.classList.add('ff-menu');
    }
    var prev3Menu = document.getElementById('thrd-ff-menu');
    if (prev3Menu.classList.contains('ff-menu-active') == true) {
        prev3Menu.classList.remove('ff-menu-active');
        prev3Menu.classList.add('ff-menu');
    }
    var prev4Menu = document.getElementById('frth-ff-menu');
    if (prev4Menu.classList.contains('ff-menu-active') == true) {
        prev4Menu.classList.remove('ff-menu-active');
        prev4Menu.classList.add('ff-menu');
    }
});


var scndFfMenu = document.getElementById('scnd-ff-menu');
scndFfMenu.addEventListener('click', function() {
    scndFfMenu.classList.remove('ff-menu');
    scndFfMenu.classList.add('ff-menu-active');
    var prev1Menu = document.getElementById('frst-ff-menu');
    if (prev1Menu.classList.contains('ff-menu-active') == true) {
        prev1Menu.classList.remove('ff-menu-active');
        prev1Menu.classList.add('ff-menu');
    }
    var prev3Menu = document.getElementById('thrd-ff-menu');
    if (prev3Menu.classList.contains('ff-menu-active') == true) {
        prev3Menu.classList.remove('ff-menu-active');
        prev3Menu.classList.add('ff-menu');
    }
    var prev4Menu = document.getElementById('frth-ff-menu');
    if (prev4Menu.classList.contains('ff-menu-active') == true) {
        prev4Menu.classList.remove('ff-menu-active');
        prev4Menu.classList.add('ff-menu');
    }
});

var thrdFfMenu = document.getElementById('thrd-ff-menu');
thrdFfMenu.addEventListener('click', function() {
    thrdFfMenu.classList.remove('ff-menu');
    thrdFfMenu.classList.add('ff-menu-active');
    var prev2Menu = document.getElementById('scnd-ff-menu');
    if (prev2Menu.classList.contains('ff-menu-active') == true) {
        prev2Menu.classList.remove('ff-menu-active');
        prev2Menu.classList.add('ff-menu');
    }
    var prev1Menu = document.getElementById('frst-ff-menu');
    if (prev1Menu.classList.contains('ff-menu-active') == true) {
        prev1Menu.classList.remove('ff-menu-active');
        prev1Menu.classList.add('ff-menu');
    }
    var prev4Menu = document.getElementById('frth-ff-menu');
    if (prev4Menu.classList.contains('ff-menu-active') == true) {
        prev4Menu.classList.remove('ff-menu-active');
        prev4Menu.classList.add('ff-menu');
    }
});

var frthFfMenu = document.getElementById('frth-ff-menu');
frthFfMenu.addEventListener('click', function() {
    frthFfMenu.classList.remove('ff-menu');
    frthFfMenu.classList.add('ff-menu-active');
    var prev2Menu = document.getElementById('scnd-ff-menu');
    if (prev2Menu.classList.contains('ff-menu-active') == true) {
        prev2Menu.classList.remove('ff-menu-active');
        prev2Menu.classList.add('ff-menu');
    }
    var prev1Menu = document.getElementById('frst-ff-menu');
    if (prev1Menu.classList.contains('ff-menu-active') == true) {
        prev1Menu.classList.remove('ff-menu-active');
        prev1Menu.classList.add('ff-menu');
    }
    var prev3Menu = document.getElementById('thrd-ff-menu');
    if (prev3Menu.classList.contains('ff-menu-active') == true) {
        prev3Menu.classList.remove('ff-menu-active');
        prev3Menu.classList.add('ff-menu');
    }
});

var onNext = document.getElementById('nxt-person');
onNext.onclick = function() {
    var frstPerson = document.getElementById('frst-person');
    frstPerson.classList.add('disappearing');

    var scndPerson = document.getElementById('scnd-person');
    var scndCon = document.getElementById('scnd-con');
    scndCon.classList.remove('prs-con-primary1');
    scndPerson.classList.add('reduceWidth');

    var thrdPerson = document.getElementById('thrd-person');
    var thrdCon = document.getElementById('thrd-con');
    thrdCon.classList.add('prs-con-primary2');
    thrdPerson.classList.add('increaseWidth');

    var onPrev1 = document.getElementById('prev-person');
    onPrev1.onclick = function() {
        var frstPerson = document.getElementById('frst-person');
        frstPerson.classList.add('appearing');

        var scndPerson1 = document.getElementById('scnd-person');
        var scndCon = document.getElementById('scnd-con');
        scndCon.classList.add('prs-con-primary1');
        scndPerson.classList.remove('reduceWidth');
        scndPerson.classList.add('upWidth');

        var thrdPerson1 = document.getElementById('thrd-person');
        var thrdCon1 = document.getElementById('thrd-con');
        thrdPerson.classList.remove('increaseWidth');
        thrdPerson.classList.add('lowWidth');
        thrdCon.classList.remove('prs-con-primary2');
    }
}

var onPrev = document.getElementById('prev-person');
onPrev.onclick = function() {
    var thrdPerson = document.getElementById('thrd-person');
    thrdPerson.classList.add('disappearing');

    var scndPerson = document.getElementById('scnd-person');
    var scndCon = document.getElementById('scnd-con');
    scndCon.classList.remove('prs-con-primary1');
    scndPerson.classList.add('reduceWidth1');

    var frstPerson = document.getElementById('frst-person');
    var frstCon = document.getElementById('frst-con');
    frstCon.classList.add('prs-con-primary3');
    frstPerson.classList.add('increaseWidth1');

    var onNext1 = document.getElementById('nxt-person');
    onNext1.onclick = function() {
        var thrdPerson = document.getElementById('thrd-person');
        thrdPerson.classList.add('appearing');

        var scndPerson1 = document.getElementById('scnd-person');
        var scndCon = document.getElementById('scnd-con');
        scndPerson.classList.remove('reduceWidth1');
        scndCon.classList.add('prs-con-primary1');
        scndPerson.classList.add('upWidth');

        var frstPerson = document.getElementById('frst-person');
        var frstCon = document.getElementById('frst-con');
        frstCon.classList.remove('prs-con-primary3');
        frstPerson.classList.remove('increaseWidth1');
    }
}