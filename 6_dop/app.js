

const text = document.querySelector('h1');

function hover() {
    document.body.style.backgroundColor = 'purple';
}

function hover() {
    text.style.fontSize = '25px'
    text.style.backgroundColor = 'purple'
}
function noHover(){
    text.style.fontSize = '20px'
    text.style.backgroundColor = 'green'
    text.style.color = 'blue'
}

text.addEventListener('mouseenter', hover)
text.addEventListener('mouseleave', noHover)
