// Array of image file names
const imageFiles = ['11111.jpg', '22222.jpg', '33333.jpg', '44444.jpg', '55555.jpg'];

// DOM Elements
const thumbsContainer = document.querySelector('.thumbs');
const displayedImage = document.getElementById('displayed-image');
const toggleButton = document.getElementById('light-dark-toggle');

// Populate thumbnails dynamically
for (let i = 1; i <= imageFiles.length; i++) {
    const thumb = document.createElement('img');
    thumb.src = `images/${imageFiles[i - 1]}`;
    thumb.alt = `Thumbnail ${i}`;
    thumb.classList.add('thumbnail');
    thumbsContainer.appendChild(thumb);
}

// Add click event listener to all thumbnails
thumbsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        displayedImage.src = event.target.src; // Update the displayed image
    }
});

// Toggle lighten/darken mode
toggleButton.addEventListener('click', () => {
    const btnClass = toggleButton.getAttribute('class');
    if (btnClass === 'dark') {
        toggleButton.setAttribute('class', 'light');
        displayedImage.style.filter = 'brightness(1.5)'; // Lighten image
    } else {
        toggleButton.setAttribute('class', 'dark');
        displayedImage.style.filter = 'brightness(0.5)'; // Darken image
    }
});
