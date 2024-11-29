// Story generator data
const storyText = "It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Helper function to get a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];

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

    // Display the final story
    document.querySelector('.story').textContent = newStory;
}

}
