document.addEventListener('DOMContentLoaded', function() {
    const progressBarSection = document.querySelector('.progress-bar-section');
    const progressBar = document.querySelector('.progress-bar');
    const navBar = document.querySelector('.navigation');
    const progressBarTop = progressBarSection.offsetTop;

    function adjustProgressBarPosition() {
        const navBarHeight = navBar.offsetHeight;
        console.log('navBarHeight:', navBarHeight, 'extraSpace:', extraSpace);

        if (progressBar.classList.contains('fixed')) {
            progressBar.style.top = `${navBarHeight + extraSpace}px`;
            console.log('Fixed Top:', progressBar.style.top);
        } else {
            progressBar.style.top = `${progressBarTop - navBarHeight + extraSpace}px`;
            console.log('Original Top:', progressBar.style.top);
        }
    }

    window.addEventListener('scroll', function() {
        const navBarHeight = navBar.offsetHeight;
        const extraSpace = 20; // 테스트를 위해 크게 설정
        if (window.scrollY > progressBarTop - navBarHeight) {
            progressBar.classList.add('fixed');
            progressBar.style.top = `${navBarHeight + extraSpace}px`;
        } else {
            progressBar.classList.remove('fixed');
            adjustProgressBarPosition();
        }
    });

    adjustProgressBarPosition();
    window.addEventListener('resize', adjustProgressBarPosition);

    const phases = document.querySelectorAll('.phase');
    const offset = navBar.offsetHeight + progressBar.offsetHeight;

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