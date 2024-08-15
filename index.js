/* Progress Bar*/
window.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    const progressBarOffset = progressBar.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= progressBarOffset) {
        progressBar.classList.add('fixed');
    } else {
        progressBar.classList.remove('fixed');
    }
});