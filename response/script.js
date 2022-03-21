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
       

   

});
console.log('Oi Amigo');