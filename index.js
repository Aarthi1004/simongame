let randomChosenColour;
let userChosenColor;
let buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userPattern=[];
let audio;
let btntxt;
var count=1;

//key press event listener
$(document).on("keypress",function(_event){
       gamePattern=[];
       userPattern=[];
       count=1;
       start();

});


//btn event listener

$(".btn").click(function(){

    userChosenColor=($(this).attr("class").split(" "))[0];
    userPattern.push(userChosenColor);
    animatekey(userChosenColor);
    playaudio(userChosenColor);
    check(userPattern.length-1);

    }
);
  


//start the game

function start()
{
    $("h1").text("Level "+count);
    count++;
    userPattern=[];
    nextSequence();
}


//game end

function gameover()
{
    audio=new Audio("./sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game over,press any key to restart");
    
}


//sequence generator
function nextSequence()
{
    let randomNumber=0+Math.floor(Math.random()*4);
    randomChosenColour=buttonColors[randomNumber];
    $("." +randomChosenColour).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
    playaudio(randomChosenColour);
}


//audio player

function playaudio(rccolor)
{
    audio=new Audio("./sounds/"+rccolor+".mp3");
    audio.play();
}



function check(currentLevel)
{
   if(userPattern[currentLevel]==gamePattern[currentLevel])
   {
    if(userPattern.length==gamePattern.length)
    {
        start();
    }
   }

   else
   {
    gameover();
   }
}


//animate keypress

function animatekey(rccolor)
{
   
    $("."+rccolor).addClass("pressed");
    setTimeout(function(){
        $("."+rccolor).removeClass("pressed");
    },100);

}



