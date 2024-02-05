const sciences = [
  {
    course: "Science",
    subj: "Physics 3",
    images: "images/physics3.JPG",
    text: 
     `
         <P>Start learning Physics</P>
         `,
    button: `<a href="Physics.html"><button class='sub-btn' id='subBtn'>Learn</button></a>`
  },
  { 
    course: "Science",
    subj: "Chemistry 4",
    images: "images/chemistry4.JPG",
    text:  `<p>Start learning Chemistry IV.</p>
      
      `,
    button: `
    <button class='sub-btn' id='subBtn'>Learn</button>
    `
    
  },
  {
    course: "Science",
    subj: "Chemistry 3",
    images: "images/chemistry3.JPG",
    text:  `<p>Start learning Chemistry III.</p>
      
      `,
    button: `
    <button class='sub-btn' id='subBtn'>Learn</button>
    `
  },
  {
    course: "Science",
    subj: "Biology 4",
    images: "images/biology4.JPG",
    text:  `<p>Start learning Chemistry III.</p>
      
      `,
    button: `
    <button class='sub-btn' id='subBtn'>Learn</button>
    `
  },
  {
    course: "Science",
    subj: "Biology 3",
    images: "images/cool-science-mural.jpg",
    text:  `<p>Start learning Chemistry III.</p>
      
      `,
    button: `
    <button class='sub-btn' id='subBtn'>Learn</button>
    `
  },
  {
    course: "Science",
    subj: "Agriculture 3",
    images: "images/agri_3.jpg",
    text:  `<p>Start learning Chemistry III.</p>
      
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
    images: "images/history1-4.JPG",
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
      {text: "Gas", correct: false},
      {text: "Liquid", correct: false},
      {text: "Solid", correct: false},
      {text: "Metal", correct: true}
      
    ]
    
   },
   {
    question: 'What is temperature scale?',
    answers: [
      {text: 'Is the degree of hottiness or coldness.', correct: false},
      {text: 'Are different ranges of measuring the degree of hottiness or coldness.', correct: true},
      {text: 'Is the point where all morecular motion stops.', correct: false},
      {text: 'Is the instrument used to measure temperature.', correct: false}
      
    ]
   },
   {
    question: 'Matter is anything that occupies space and has_________?',
    answers: [
      {text: "Volume", correct: false},     
      {text: "Weight", correct: false},
      {text: "Density", correct: false},
      {text: "Mass", correct: true}
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
    question: 'What happens to the kinetic energy of the particle when the temperature of the body is reduced?',
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
      {text: "Takes the shape of container", correct: true},
      {text: "Move random", correct: false},
      {text: "Can flow", correct: false},
      {text: "Intermolecular forces are weak", correct: false}
      
    ]
    
   },
   {
    question: 'The following are the factors that affect gas pressure, except?',
    answers: [
      {text: "Number of particles", correct: false},
      {text: "Ability to flow", correct: true},
      {text: "Temperature of the gas", correct: false},
      
     
    ]
    
   },
   {
    question: 'What theory states that matter is made up of tiny discrete particles that are continuously in random motion?',
    answers: [
      ,
      {text: "Gas law", correct: false},
      {text: "Hooker's law", correct: false},
      {text: "Momentum", correct: false},
      {text: "Kinetic", correct: true}
    ]
    
   }
  
];