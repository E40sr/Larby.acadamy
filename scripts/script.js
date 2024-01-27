function myFunction(){
  document.getElementById('content').innerHTML = `<header class="header">
    <h2>Science</h2>
</header>

<section class="main-content">
    <h3>Welcome</h3>
    <p class="para">Welcome to the platform that connects students to modern education resources.</p>
    
    <!-- Add more content as needed -->
    <div class='container-img'>
    <img src="images/tips-for-easier-studying-860x420.jpg" class="study-photo">
      <div class='text-block'>
        <h4>Studying</h4>
        <p>What is the great way to study.</p> 
      </div>
    </div>
</section>
`
  
} 


   
  

 function myHumanities(){
  
document.getElementById('content').innerHTML = ` <h2>Welcome to the Humanity <span>Resources</span></h2>
<p>On this platform you can find different educational resources from Science subjects to language subjects.</p>

   `;

  
}
setTimeout(myHom, 7000)
