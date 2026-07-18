document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the hero button
    const heroButton = document.querySelector('#home button');
    
    // Grab the analysis section
    const analysisSection = document.querySelector('#analysis');

    // Add smooth scroll click event
    if (heroButton && analysisSection) {
        heroButton.addEventListener('click', () => {
            analysisSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
});