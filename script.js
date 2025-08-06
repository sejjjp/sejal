function animateHeroText() {
    const heroSpan = document.querySelector('.hero-section-span');
    if (!heroSpan) return;

    const text = "A passionate UX Designer crafting seamless and engaging digital experiences that are both visually stunning and exceptionally user-friendly.";
    heroSpan.innerHTML = '';

    const words = text.split(/\s+/);
    console.log(words);
    let charDelay = 0;

    words.forEach((word) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        word.split('').forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = char;
            // Stagger the animation of each character within the word
            charSpan.style.animationDelay = `${(charDelay++ * 0.03)}s`;
            wordSpan.appendChild(charSpan);
        });

        heroSpan.appendChild(wordSpan);
        // Add a space after each word to keep them separated
        heroSpan.appendChild(document.createTextNode(' '));
    });

    const heroInfoItems = document.querySelectorAll('.hero-info-item');

    // Calculate the total time for the hero text animation
    const charAnimationDuration = 0.5; // From your CSS for .char
    const lastCharDelay = (charDelay - 1) * 0.03;
    const totalHeroAnimationTime = (lastCharDelay + charAnimationDuration) * 1000; // In milliseconds

    if (heroInfoItems.length > 0) {
        // Wait for the main hero animation to complete
        setTimeout(() => {
            // Animate the first item (e.g., "Pune, India")
            if (heroInfoItems[0]) {
                heroInfoItems[0].classList.add('animate');
            }

            // Animate the second item after a short delay
            if (heroInfoItems[1]) {
                setTimeout(() => {
                    heroInfoItems[1].classList.add('animate');
                }, 200); // 200ms delay for a staggered effect
            }
        }, totalHeroAnimationTime);
    }

}

// JavaScript for seamless marquee animation
function setupMarquee() {
    const container = document.querySelector('.marquee-container');
    if (!container) return;

    const content = container.querySelector('.marquee-content');
    const items = content.querySelectorAll('span');
    let totalWidth = 0;
    items.forEach(item => {
        totalWidth += item.offsetWidth + parseInt(getComputedStyle(item).marginLeft) + parseInt(getComputedStyle(item).marginRight);
    });

    // Set animation duration based on content width for consistent speed
    const duration = totalWidth / 100; // Adjust '100' to change speed (higher is slower)
    content.style.animationDuration = `${duration}s`;
}

function setupMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const closeBtn = document.querySelector('.close-menu');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');

    if (hamburgerBtn && closeBtn && mobileOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            mobileOverlay.classList.add('is-active');
            document.body.style.overflow = 'hidden'; // Optional: stops page from scrolling
        });

        closeBtn.addEventListener('click', () => {
            mobileOverlay.classList.remove('is-active');
            document.body.style.overflow = ''; // Optional: restores scrolling
        });
    }
}

window.addEventListener('load', () => {
    // setupMarquee();
    setupMobileMenu();
});
window.addEventListener('DOMContentLoaded', () => {
    // setupMarquee();
    animateHeroText();
});