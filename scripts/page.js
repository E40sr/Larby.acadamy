const sciences = [
  {
    course: "Science",
    subj: "Physics 3 & 4",
    images: "images/Cool-science-mural.jpg",
    text: 
     `
         <P>Start learning Physics</P>
         `,
    button: `<a href="Physics.html"><button class='sub-btn' id='subBtn'>Learn</button></a>`
  },
  {
    course: "Science",
    subj: "Chemistry",
    images: "images/Chemistry.PNG",
    text:  `<p>Start learning Chemistry IV.</p>
      
      `,
    button: `
    <button class='sub-btn' id='subBtn'>Learn</button>
    `
    
  }
];

const humanities = [
  {
    course: "Humanity",
    subj: "History",
    images: "images/History.PNG",
    text: `
    <p>Start learning History</P>
    
    `,
    button: `
    <button class='sub-btn' id='subBtn'>Learn</button>
    `
  }
];

const questions = [
  {
    question: 'The following are the states of matter apart from?',
    answers: [
      {text: "Solid", correct: false},
      {text: "Liquid", correct: false},
      {text: "Metal", correct: true},
      {text: "Gas", correct: false}
    ]
    
   },
   {
    question: 'What is temperature scale?',
    answers: [
      {text: 'Are different ranges of measuring the degree of hottiness or coldness.', correct: true},
      {text: 'Is the degree of hottiness or coldness.', correct: false},
      {text: 'Is the instrument used to measure temperature.', correct: false},
      {text: 'Is the point where all morecular motion stops.', correct: false}
    ]
   },
   {
    question: 'Matter is anything that occupies space and has_________?',
    answers: [
      {text: "Volume", correct: false},
      {text: "Mass", correct: true},
      {text: "Weight", correct: false},
      {text: "Density", correct: false}
    ]
    
   },
   {
    question: 'Which state of matter has the weakest intermorecular force?',
    answers: [
      {text: "Solid", correct: false},
      {text: "Liquid", correct: false},
      {text: "Plasma", correct: false},
      {text: "Gas", correct: true}
    ]
    
   },
   {
    question: 'Define absolute temperature.',
    answers: [
      {text: "a temperature at which gas particles would have no kinetic energy and zero volume.", correct: true},
      {text: "a temperature that is equal to celsius temperature.", correct: false},
      {text: "Boiling point of iron.", correct: false},
      {text: "The temperature that is calculated in kelvin.", correct: false}
    ]
    
   },
   {
    question: 'Explain the effect of temperature on intermolecular force of particles',
    answers: [
      {text: "Increase in temperature strengthens intermolecular force.", correct: false},
      {text: "Temperature causes intermorecular force to stop moving.", correct: false},
      {text: "Increase in temperature weakens intermolecular force.", correct: true},
      {text: "Temperature increases volume of intermolecular force.", correct: false}
    ]
    
   },
   {
    question: 'What happens to the kineic energy of the particle when the temperature of the body is reduced?',
    answers: [
      {text: "Increases", correct: false},
      {text: "Increases then Reduses", correct: false},
      {text: "Reduces", correct: true},
      {text: "Remains constant", correct: false}
    ]
    
   },
   {
    question: 'State whether each of the following descrides a solid',
    answers: [
      {text: "Fixed volume but no fixed shape.", correct: false},
      {text: "Particles vibrate but cannot change positions", correct: true},
      
    ]
    
   },
   {
    question: 'Which property makes a gas to be suitable for use in inflating a football?',
    answers: [
      {text: "Takes the shape of container", correct: false},
      {text: "Can flow", correct: false},
      {text: "Intermolecular forces are weak", correct: false},
      {text: "Move random", correct: true}
    ]
    
   },
   {
    question: 'The following are the factors that affect gas pressure, except?',
    answers: [
      {text: "Number of particles", correct: false},
      {text: "Temperature of the gas", correct: false},
      {text: "Ability to flow", correct: false},
     
    ]
    
   },
   {
    question: 'What theory states that matter is made up of tiny discrete particles that are continuously in random motion?',
    answers: [
      {text: "Kinetic", correct: false},
      {text: "Gas law", correct: false},
      {text: "Hooker's law", correct: false},
      {text: "Momentum", correct: true}
    ]
    
   }
  
];