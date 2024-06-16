const myLib = []
let i = 0

function display(num){

    const container = document.getElementById('card-container')

    container.innerHTML += `<div>book: ${myLib[num].title} <br> author: ${myLib[num].author}
    Pages: ${myLib[num].pages} <br> Read: ${myLib[num].read} <br></div>`
}

function book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    myLib.push(this)
    display(i++)

}

document.addEventListener('DOMContentLoaded', function(){

    const openForm = document.getElementById('open-form')
    const closeForm = document.getElementById('close')
    const form = document.getElementById('form')
    
    openForm.addEventListener('click', function(){

        overlay.style.display = "flex"
    })

    closeForm.addEventListener('click', function(){

        overlay.style.display = "none"
    })

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }})

    form.addEventListener('submit', function(event){

        event.preventDefault()

        const title = document.getElementById('book').value
        const author = document.getElementById('author').value
        const pages= document.getElementById('pages').value
        const read = document.getElementById('read').value

        book(title, author, pages, read)

    })    
})