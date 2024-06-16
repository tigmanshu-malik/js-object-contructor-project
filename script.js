const myLib = [];

function display() {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    for (let i = 0; i < myLib.length; i++) {
        container.innerHTML += `
        <div>
            Book: ${myLib[i].title} <br>
            Author: ${myLib[i].author} <br>
            Pages: ${myLib[i].pages} <br>
            Read: ${myLib[i].read ? 'Yes' : 'No'} <br>
            <button onclick="deleteBook(${i})">Delete</button>
        </div>`;
    }
}

function deleteBook(index) {
    myLib.splice(index, 1);
    display();
}

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    myLib.push(this);
    display();
}

document.addEventListener('DOMContentLoaded', function() {
    const openForm = document.getElementById('open-form');
    const closeForm = document.getElementById('close');
    const form = document.getElementById('form');
    const overlay = document.getElementById('overlay');
    
    openForm.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });

    closeForm.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('book').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked; 

        new book(title, author, pages, read);
    });
});
