    var onClickedPointer = document.getElementById('clickedPointer');
    onClickedPointer.addEventListener('click', function() {
        var scrolled;
        scrolled = window.scrollTo(900, 900);
    });

    var onLeavedMouseHire = document.getElementById('hire');
    onLeavedMouseHire.onmouseleave = onLeavedMouseHire.classList.add('onLeavedMouseHire');
