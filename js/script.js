let menu = document.querySelector('#menu');
let mobilenav = document.querySelector('.mobile-nav-home');

menu.addEventListener('click', function () {
    mobilenav.style.display = "block";

});

let toggle = document.getElementById('btn'),
mob = document.getElementById('mob');
toggle.addEventListener('click', function(){
    this.style.display = "block";
    mob.style.display = "block";
});

document.getElementById('close-mob').addEventListener('click', function(close){
    document.getElementById('mob').style.display = "none";
});

document.getElementById('close-side').addEventListener('click', function(close){
    mobilenav.style.display = "none";
})
