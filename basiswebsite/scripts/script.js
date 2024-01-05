

function initializePage() {
    const carouselContainer = document.getElementById('carousel-container');
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('carousel-indicators');

    let currentIndex = 0;

    // Set up indicators
    for (let i = 0; i < carousel.children.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    }, 5000);

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}%)`;

        // Update indicators
        const indicators = indicatorsContainer.children;
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.toggle('active', i === currentIndex);
        }
    }
}

document.addEventListener('DOMContentLoaded', initializePage);





document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const myNav = document.getElementById('myNav');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', function () {
        myNav.style.width = myNav.style.width === '100%' ? '0' : '100%';
    });

    closeBtn.addEventListener('click', function () {
        myNav.style.width = '0';
    });

    // Voeg deze regel toe om ervoor te zorgen dat het menu verborgen is bij het laden van de pagina
    myNav.style.width = '0';
});
