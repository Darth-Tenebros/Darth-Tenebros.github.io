
// hacky bs go brrrrrrr
let isFirst = true;
function changeToggleImage(){
    if(isFirst){
        document.getElementById("light-dark-toggle").src = "./img/dark.png";
        document.getElementById("lightsaber").src = "./img/red_lightsaber.png";
        isFirst = false;
    }else{
        document.getElementById("light-dark-toggle").src = "./img/light.png";
        document.getElementById("lightsaber").src = "./img/lightsaber.png"
        isFirst = true;
    }
}

const toggle = document.getElementById("light-dark-toggle");

toggle.addEventListener('click', function(){
    let element = document.body;
    element.classList.toggle("dark-mode"); // Toggle the class instead of setting it
    changeToggleImage();
});

