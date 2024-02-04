
let humanitiesHTML = '';

humanity();



function humanity(){
  humanities.forEach((subject) =>{
  humanitiesHTML += `
   
  <div class="container-subject">
  <img src="${subject.images}" class="history-img">
  <div class="text-box">
    <h3>${subject.subj}</h3>
    ${subject.text}
  </div>
    ${subject.button}
  </div>
  
  `
})
document.querySelector('.main-content').innerHTML = humanitiesHTML;
}