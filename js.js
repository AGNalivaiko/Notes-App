const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('button');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
};

createBtn.addEventListener('click', () => {
    notesContainer.insertAdjacentHTML('afterbegin', "<p contenteditable='true' class = 'input-box'><img src='delete.png'></img></p>");
});
createBtn.addEventListener('keydown', (event) => {
    if (event.target === "Enter") {
        notesContainer.insertAdjacentHTML('afterbegin', "<p contenteditable='true' class = 'input-box'><img src='delete.png'></img></p>");
    }
})

notesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.parentElement.remove();
        updateStorage();
    }
    else if (event.target === 'P') {
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage();
            }
        })
    }
});
