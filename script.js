const open = document.getElementById('open'),
      form = document.querySelector('form'),
      books = [];

open.addEventListener('click', () => {

    if(form.style.visibility === 'hidden') {
        open.style.background = '#60afd4';
        open.style.rotate = '45deg';
        form.style.visibility = 'visible';
        form.style.opacity = '1';
    }
    else {
        form.style.visibility = 'hidden';
        form.style.opacity = '0';
        open.style.background = '#0ea5e9';
        open.style.rotate = '0deg';
    }
})

form.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    data.indexValue = books.length;
    books.push(data);

    (() => {
        let clear = document.querySelectorAll('input');
        clear.forEach(input => {
            if(input.value == 'Submit') return;
            input.value = '';
        })
    })();

    addBook(books);
})

function addBook (array) {
    let bookIndex = array[array.length -1],
        books = document.querySelector('.books'),
        book = document.createElement('div'),
        myDivs = [];

    book.className = 'book';
    document.books.appendChild(book);
    
    for(let i = 0; i < 4; i++){
        let div = document.createElement('div');

        
    }
}

function erasePage () {
    const erase = document.getElementsByClassName('btn-danger');


}