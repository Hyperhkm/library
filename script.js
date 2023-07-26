const open = document.getElementById('open'),
      form = document.querySelector('form'),
      erase = document.querySelectorAll('.erase'),
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

    data.indexValue = booksArr.length;
    booksArr.push(data);

    (() => {
        let clear = document.querySelectorAll('input');
        clear.forEach(input => {
            if(input.value == 'Submit') return;
            input.value = '';
        })
    })();
    
    addBook(booksArr);
})

erase.forEach(button => {
    button.addEventListener('click', () => {
        let arrIndex = Number(button.dataset.index);

                
    })
})

function addBook (array) {
    let bookIndex = array[array.length -1],
        booksDiv = document.querySelector('.books'),
        book = document.createElement('div'),
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
    eraseButton.dataset.index = array.length-1;
    eraseButton.innerText = 'Erase';
    myDivs[0].innerText = `Title: ${bookIndex.title}`;
    myDivs[1].innerText = `Author: ${bookIndex.author}`;
    myDivs[2].innerText = `Pages ${bookIndex.pages}`;
    myDivs[3].className = "form-check form-switch";
    myDivs[3].appendChild(label);
    myDivs[3].appendChild(input);
    label.className = "form-check-label"
    label.innerText = 'Read';
    input.className = 'form-check-input';
    input.type = 'checkbox';
    input.role = 'switch';
    input.name = 'check';
    if(bookIndex.read) {input.checked = true}
}