const gallery = document.querySelector('.gallery');

// Stop rotation on hover
gallery.addEventListener('mouseenter', () => {
    gallery.style.animationPlayState = 'paused'; // Pause the animation
});

// Resume rotation when not hovering
gallery.addEventListener('mouseleave', () => {
    gallery.style.animationPlayState = 'running'; // Resume the animation
});


document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-music');
    var playPauseButton = document.getElementById('play-pause-button');

    // Set initial volume
    audio.volume = 1.0; // Set volume to full

    // Play/Pause button functionality
    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play().catch(function (error) {
                console.error("Error playing audio:", error);
            });
            playPauseButton.classList.add('active'); // Add active class
            playPauseButton.querySelector('span').textContent = 'Pause'; // Change text to Pause
        } else {
            audio.pause();
            playPauseButton.classList.remove('active'); // Remove active class
            playPauseButton.querySelector('span').textContent = 'Touch ME!'; // Change text to Play
        }
    });
});
