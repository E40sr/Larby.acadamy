
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('buttons');
const nextButton = document.getElementById('nxt-btn');

let currentQuestionIndex = 0;
let scole = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  scole = 0;
  nextButton.innerText = 'Next';
  showQuestion();
};

function showQuestion(){
  resetState()
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('botton');
    button.innerText = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
  });
}

function resetState(){
  nextButton.style.display = 'none';
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    scole++;
  }else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
      
    }
    button.disabled = true;
  });

  
  nextButton.style.display = "block"
}

function showScole(){
  resetState();
  
  questionElement.innerHTML = `<div>
  &#9733;
  <div>
  You scoled ${scole} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else {
    showScole();
  }
}

nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else {
    startQuiz();
  
  }
})

startQuiz();
