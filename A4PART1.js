// Story generator data
const storyText = "It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Helper function
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event handler
document.getElementById('generate').addEventListener('click', result);

function result() {
    let newStory = storyText; // Create a copy of the original story text

    // Replace placeholders with random values
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    // Handle custom name input
    const customName = document.getElementById('customname').value;
    if (customName !== '') {
        newStory = newStory.replaceAll('Bob', customName);
    }

    // Handle UK region-specific conversions
    if (document.getElementById('uk').checked) {
        const weightInStones = Math.round(300 / 14) + " stone";
        const tempInCelsius = Math.round((94 - 32) * 5 / 9) + " centigrade";
        newStory = newStory.replaceAll('300 pounds', weightInStones);
        newStory = newStory.replaceAll('94 degrees Fahrenheit', tempInCelsius);
    }

    // Display the final story
    document.querySelector('.story').textContent = newStory;
}
