

kinetic();

function kinetic() {
  let kinetic = document.querySelector(".container")
  
  kinetic.innerHTML = `
  <div class="quize">
  <h2>Physics Quiz</h2>
  <h3 id="question">question</h3>
  <div id="buttons">
    <button class="btn">answer1</button>
    <br> <br>
    <button  class="btn">answer2</button>
    <br> <br>
    <button  class="btn">answer3</button>
    <br> <br>
    <button  class="btn">answer4</button>
  </div>
  <button id="nxt-btn">Next</button>
</div>
  `
};


