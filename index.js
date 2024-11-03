
var numOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var selectedChar = this.innerHTML;
    player(selectedChar);
    buttonAnimation(selectedChar);
});
}


document.addEventListener('keypress',function (event) {
    player(event.key);
})


function player(ch)
{
    switch(ch)
    {
        case 'j' :
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'k' :
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l' :
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'a' :
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 's' :
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'd' :
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'f' :
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    }
    buttonAnimation(ch);
}

function buttonAnimation(ch)
{
    var activeButton = document.querySelector("."+ch);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
       activeButton.classList.remove("pressed"); 
    }, 100);
}
