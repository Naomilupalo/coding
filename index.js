// JavaScript for Scroll to Top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show button when user scrolls down 100px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

   function togglePlay() {
            var video = document.getElementById('video');
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
