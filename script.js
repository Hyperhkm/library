const open = document.getElementById('open'),
      form = document.querySelector('form'),
      booksDiv = document.querySelector('.books'),
      booksArr = [];

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
    let booksChilds = document.querySelectorAll('.book');

    booksArr.push(data);

    (() => {
        let clear = document.querySelectorAll('input');
        clear.forEach(input => {
            if(input.value == 'Submit') return;
            input.value = '';
        })
    })();
    
    removeAllNodes(booksChilds);
    iterateBooks(booksArr);
    eraseDivs(booksArr);
})

function addBook (currentIndex) {
    let book = document.createElement('div'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        eraseButton = document.createElement('button'),
        myDivs = [];

    book.className = 'book';
    booksDiv.appendChild(book);
    
    for(let i = 0; i < 4; i++){
        let div = document.createElement('div');

        myDivs.push(div);
        book.appendChild(myDivs[i]);        
    }

    book.appendChild(eraseButton);
    eraseButton.className = 'btn btn-danger erase';
    eraseButton.innerText = 'Erase';
    eraseButton.dataset.index = currentIndex.index;
    myDivs[0].innerText = `Title: ${currentIndex.title}`;
    myDivs[1].innerText = `Author: ${currentIndex.author}`;
    myDivs[2].innerText = `Pages ${currentIndex.pages}`;
    myDivs[3].className = "form-check form-switch";
    myDivs[3].appendChild(label);
    myDivs[3].appendChild(input);
    label.className = "form-check-label"
    label.innerText = 'Read';
    input.className = 'form-check-input';
    input.type = 'checkbox';
    input.role = 'switch';
    input.name = 'check';
    if(currentIndex.read) {input.checked = true}
}

function removeAllNodes (array) {
    array.forEach(book => {
        while(book.firstChild) {
            book.removeChild(book.firstChild);
        }
        book.remove();
    })
}

function iterateBooks (array) {
    array.forEach((book, index) => {
        book.index = index;
        addBook(book);
    });
}

function eraseDivs (array) {
    let erase = document.querySelectorAll('.erase');
    erase.forEach(button => {
        button.addEventListener('click', function () {
            let booksChilds = document.querySelectorAll('.book');
            array.splice(button.dataset.index, 1);
            removeAllNodes(booksChilds);
            iterateBooks(array);
            eraseDivs(array);
        })
    })
}