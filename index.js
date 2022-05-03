//Random 1-6
//Player - 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

//Player 2
var randomNum2 = Math.floor(Math.random()* 6) + 1;
var randomImage2 = "images/dice" + randomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

//Player 3
var randomNum3 = Math.floor(Math.random() * 6) + 1;
var randomImage3 = "images/dice" + randomNum3 + ".png";

var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src",randomImage3)

//Player 4
var randomNum4 = Math.floor(Math.random() * 6) + 1;
var randomImage4 = "images/dice" + randomNum4 + ".png";

var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src",randomImage4);

//Main logic
if(randomNum1 > (randomNum2 && randomNum3 && randomNum4))
{
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNum2 > (randomNum1 && randomNum3 && randomNum4))
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if(randomNum3 > (randomNum1 && randomNum2 && randomNum4))
{
    document.querySelector("h1").innerHTML = "Player 3 wins";
}
else if(randomNum4 > (randomNum1 && randomNum2 && randomNum3))
{
    document.querySelector("h1").innerHTML = "Player 4 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}