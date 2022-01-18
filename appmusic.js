let hide = document.querySelector('#hide')

hide.addEventListener("mouseenter", function(event){
    event.target.style.opacity = "100%"
    
})

hide.addEventListener("mouseleave", function(event){
    event.target.style.opacity = "0%"
})

let audioPonponshit = document.querySelector('.audioponponshit');
let controlPonponshit = document.querySelector('.controlponponshit');

controlPonponshit.onclick = function() {
    document.querySelector('#play-btn').classList.toggle("displaynone");
    document.querySelector('#pause-btn').classList.toggle("displaynone");

    // descendre les autres cards

    document.querySelector('.changenightcity').style.transform = "translateY(100%)";
    document.querySelector('.changetherebelpath').style.transform = "translateY(100%)";
    document.querySelector('.changeiwantto').style.transform = "translateY(100%)";
    document.querySelector('.changecircusmagnus').style.transform = "translateY(100%)";
    document.querySelector('.changegr4ves').style.transform = "translateY(100%)";

    // modifier le design de la cards en cours
    document.querySelector('.card-img-top').style.transform = "scale(0)"
    document.querySelector('.ponponshit').style.width = "400%";
    document.querySelector('.changeponponshit').insertAdjacentHTML('afterend', '<img class="equalizer" src="Cyberpunk/4 - Music/Equalizer_Gif.gif" alt="Equalizer">')

    // play ou pause la musique

    let method = document.querySelector('#play-btn').classList == "displaynone" ? 'play' : 'pause';
    audioPonponshit[method]();
    
    return false;
}

let player = document.getElementById('audio0');    
player.addEventListener("timeupdate", function() {
    let curTime = player.currentTime;
    let duration = player.duration;
    // document.querySelector('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
    document.querySelector('.hp_range').style.width = `${curTime/duration * 100}%`
    console.log(curTime, duration);
});

