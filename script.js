//make input id='formBox' into DOM element
let formBox = document.getElementById('formBox');
let submit = document.getElementById('submit');

/*create p element to be added to end of body element,
make its value equal to current value of input id=formBox*/
let formUpdate = () => {
    let paragraph= document.createElement('p');
    paragraph.innerHTML= formBox.value;
    document.body.appendChild(paragraph);
};

submit.addEventListener('click', formUpdate);