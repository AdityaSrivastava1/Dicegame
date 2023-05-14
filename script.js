        // images/dice1.png - images/dice6.png
var randomnumber1=Math.floor(Math.random()*6 ) + 1;  
var randomDiceImage="dice" + randomnumber1 + ".png";  //dice1.png - dice6.png
var randomImageSource="images/" + randomDiceImage;
var img1  = document.querySelectorAll("img")[0].setAttribute('src',randomImageSource);



var randomnumber2=Math.floor(Math.random()*6 ) + 1;  
var randomDiceImage2="dice" + randomnumber2 + ".png";  //dice1.png - dice6.png
var randomImageSource2="images/" + randomDiceImage2;
var img2  = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);

if(randomnumber1 > randomnumber2)
{
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins 🙌";
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelectorAll("h1")[0].innerHTML="Player 2 wins 🙌";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Draw 👻";   
}

