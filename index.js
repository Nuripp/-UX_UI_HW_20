document.addEventListener('DOMContentLoaded', function() {
    const progressBarSection = document.querySelector('.progress-bar-section');
    const progressBar = document.querySelector('.progress-bar');
    const navBar = document.querySelector('.navigation');
    const navBarHeight = navBar.offsetHeight;
    const progressBarTop = progressBarSection.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY > progressBarTop - navBarHeight) {
            progressBar.classList.add('fixed');
        } else {
            progressBar.classList.remove('fixed');
        }
    });


    const phases = document.querySelectorAll('.phase');
    const progressBarHeight = progressBar.offsetHeight; 
    const offset = navBarHeight + progressBarHeight;

    phases.forEach(phase => {
        phase.addEventListener('click', function() {
            const targetId = phase.textContent.toLowerCase().replace(/ /g, '-');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

/* Nav hover state */
$('nav li').hover(
    function() {
        // mouse enter
        if (!$(this).find('a').hasClass('active')) {
            $(this).addClass('nav-hover');
        }
    },
    function() {
        // mouse leaves
        if (!$(this).find('a').hasClass('active')) {
            $(this).removeClass('nav-hover');
        }
    }
);


/* Back to Top button */
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});