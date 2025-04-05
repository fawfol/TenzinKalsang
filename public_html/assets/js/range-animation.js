
function checkFadeIn_range() {
    var rangebox_1 = document.getElementById('inner-range-box-1');
    var rangebox_2 = document.getElementById('inner-range-box-2');
    var rangebox_3 = document.getElementById('inner-range-box-3');
    var rangebox_4 = document.getElementById('inner-range-box-4');
    var rangebox_5 = document.getElementById('inner-range-box-5');
    var rangebox_6 = document.getElementById('inner-range-box-6');
    var rangebox_7 = document.getElementById('inner-range-box-7');
    var rangebox_8 = document.getElementById('inner-range-box-8');
    var rangebox_9 = document.getElementById('inner-range-box-9');
    var rangebox_10 = document.getElementById('inner-range-box-10');

    const fadeElements = document.querySelectorAll('.fade-in-range');
    fadeElements.forEach(element => {
        if (isInViewport(element)) {
                setTimeout(function(){rangebox_1.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_2.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_3.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_4.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_5.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_6.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_7.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_8.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_9.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_10.classList.add('animate');}, 200);

            element.classList.add('fade-in-visible'); // Add the fade-in class
        }
        else{
            element.classList.remove('fade-in-visible');
            setTimeout(function(){rangebox_1.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_2.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_3.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_4.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_5.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_6.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_7.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_8.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_9.classList.remove('animate');}, 200);
            setTimeout(function(){rangebox_10.classList.remove('animate');}, 200);
        }
    });
}

window.addEventListener('scroll', checkFadeIn_range);