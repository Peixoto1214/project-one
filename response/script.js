// link nav toggle

document.addEventListener('DOMContentLoaded', function(event){
      
    // show mobile nav menu

    let navShow = document.querySelector('.navShow')
    //when I click the burger
    document.querySelector('.dp-nav-toggle').addEventListener('click', function(e){
        e.preventDefault();
    // target the dp-nav-menu-mobile class
    document.querySelector('.dp-nav-menu-mobile').classList.toggle('navShow')



    });

    //create variables for each class
    let smallCards = document.getElementsByClassName('dp-grid-containers');
    
    //create loop for all the cards
    for (let i = 0; i < smallCards.length; i++) {
    //my end goal is to swap my regular class for my large class
    smallCards[i].addEventListener('click', function(e){
    e.preventDefault();
    //add click event targeting class
    
    //when I click on a small card
       
    for (let r = 0; r < smallCards.length; r++) {
        
            smallCards[r].classList.remove('dp-grid-containers-large');


            }       
            //the large card is added
            this.classList.add('dp-grid-containers-large');
         
        });
           

    };

    //validate email

    //target the email input are
    let mail = document.querySelector('form-control')
    

    //make sure all characters on email are valid
    function ValidateEmail(mail) {
        mail.preventDefault()
        let theValue = document.querySelector('#exampleFormControlInput1').value;
        console.log(theValue);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theValue))

        {
            document.querySelector('#exampleFormControlInput1').value = " "; 
            document.querySelector('#exampleFormControlTextarea1').value = " "; 

    //if it is not valid tell user it is not valid
         return (true);  }
        alert("You have entered an invalid email address!")
         return (false)
    
    
}
document.querySelector('.dp-contact-form').addEventListener('submit', ValidateEmail)

       

   

});
console.log('Oi Amigo');