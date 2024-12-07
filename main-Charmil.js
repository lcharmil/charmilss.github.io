// Show/hide comments functionality
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.setAttribute('hidden', true);

showHideBtn.onclick = function () {
    const isHidden = commentWrapper.hasAttribute('hidden');
    showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
    if (isHidden) {
        commentWrapper.removeAttribute('hidden');
    } else {
        commentWrapper.setAttribute('hidden', true);
    }
};

// Add comments functionality
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function (e) {
    e.preventDefault();
    if (nameField.value && commentField.value) {
        const listItem = document.createElement('li');
        const namePara = document.createElement('p');
        const commentPara = document.createElement('p');

        namePara.textContent = nameField.value;
        commentPara.textContent = commentField.value;

        listItem.appendChild(namePara);
        listItem.appendChild(commentPara);
        list.appendChild(listItem);

        nameField.value = '';
        commentField.value = '';
    } else {
        alert('Please fill in all fields');
    }
};
