let h1 = document.querySelector('h1');

function enter() {
  console.log("Мышь в тексте")

}

h1.addEventListener('mouseenter', enter);
h1.addEventListener('mouseleave', function() {
  console.log("Мышь покинула текст")

}) 
