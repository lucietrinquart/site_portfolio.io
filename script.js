document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les sliders
    const sliderContainers = document.querySelectorAll('.slider-container');
    
    // Pour chaque slider
    sliderContainers.forEach(sliderContainer => {
        const slider = sliderContainer.querySelector('.slider');
        const images = slider.querySelectorAll('img');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');
        let currentIndex = 0;

        function moveSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            moveSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            moveSlider();
        });
    });
});