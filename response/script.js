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
    
   

});