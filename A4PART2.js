// Array of image file names
const imageFiles = ['A4PART2_1.jpg', 'A4PART2_2.jpg', 'A4PART2_3.jpg', 'A4PART2_4.jpg', 'A4PART2_5.jpg'];

// DOM Elements
const thumbsContainer = document.querySelector('.thumbs');
const displayedImage = document.getElementById('displayed-image');

// Dynamically create thumbnails
imageFiles.forEach((file, index) => {
    const thumb = document.createElement('img');
    thumb.src = `images/${file}`;
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.classList.add('thumbnail');
    thumbsContainer.appendChild(thumb);

    // Add click event listener to thumbnails
thumbsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        displayedImage.src = event.target.src;
    }
});

});
