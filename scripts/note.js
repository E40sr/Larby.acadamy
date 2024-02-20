const note = []

renderNote()

function renderNote(){

let noteHTML = '';

for (let i = 0; i < note.length; i++) {
  const noteObject = note[i];

  const {name, createdDate} = noteObject;
  const html =
  `<div>
  ${createdDate}
  </div>
  <div class='nooo'> ${name}</div>
  <button onclick="note.splice(${i}, 1)
  renderNote()"> del </button>
  `
  noteHTML += html
  }
document.querySelector('.js-notes').innerHTML = noteHTML
document.querySelector('.js-note').innerHTML = noteHTML

}

function myFunction(){
  const noteText = document.querySelector('.txt')
  const noteText2 = document.querySelector('.txts')

  let name = noteText.value || noteText2.value;

  let time = Date()

  //const date = time.getDay()
  //const year = time.getMinutes();

  let createdDate = time;

  note.push({name, createdDate})

  noteText.value = ''

  renderNote()

}


  
function popUp(){

  let pop = document.querySelector('.take-notes');
pop.style.display="block";

let hide = document.querySelector('.immigrants');
hide.style.display="none";

let close = document.querySelector('#closeBtn')
close.style.display="block"
}

function hide(){
let hide = document.querySelector('.take-notes');
hide.style.display="none"


let close = document.querySelector('#closeBtn')
close.style.display="none"

let show = document.querySelector('.immigrants');
show.style.display="block";
}