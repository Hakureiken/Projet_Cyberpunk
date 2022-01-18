const home = document.getElementById('home')
const woman = document.getElementById('femme')
const fumee = document.getElementById('smoke')

window.addEventListener('load', () => {

    woman.style.transform = "translateX(100%)"
    

    setTimeout(function(){
        fumee.style.opacity = "1"
        fumee.style.transform = "translateX(150px)"
    }, 2000);

    setTimeout(function(){
        fumee.style.opacity = "0"
    },4000)

    setTimeout(function(){
        fumee.style.display = "none"
    }, 6000)

})

// animation du menuinterne
    // bouton play/pause

function clickNext(id, transform) {
  
  document.getElementById("nomadcontenu").style.transform = "translateX("+transform+"%)";
  document.getElementById("streetkidcontenu").style.transform = "translateX("+transform+"%)";
  document.getElementById("corpocontenu").style.transform = "translateX("+transform+"%)";
 
  document.getElementById("nomad").classList.remove('active');
  document.getElementById("streetkid").classList.remove('active');

  document.getElementById("corpo").classList.remove('active');
  document.getElementById(id).classList.add('active');
}

let hide = document.querySelector('#hide')
console.log(hide);

hide.addEventListener("mouseenter", function(event){
    event.target.style.opacity = "100%"
    
})

hide.addEventListener("mouseleave", function(event){
    event.target.style.opacity = "0%"
})
