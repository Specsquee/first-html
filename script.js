function funAnswer(){
alert("Welcome to my gum emporium");
let funAnswer = prompt("Are you here to grade my Java? YES or NO or OTHER please");

if(funAnswer == ""){
    alert("It is a simple question. Please answer it")
    funAnswer = prompt("Are you here to grade my Java? YES or NO or OTHER please");
}
if(funAnswer == "YES"){
    alert("I would like the max grade please kind kind TA or Teacher.");
    document.write("Please imagine this is some fancy Java feature here");
} 
else if (funAnswer == "NO"){
    alert("Hope you like the color pink...because of Gum")
    document.write("I told you...It is a lot of pink.");
} 
else if (funAnswer == "OTHER"){
    alert("You won the the prize for coming to my gum website! Search the site for your prize!");
} 
else{
    alert("It is a simple yes or no question. Are you kidding me!?");
    document.write("")
}
if(funAnswer == "OTHER"){
    document.write("YOU HAVE WON THE PRIZE OF SCROLLING THROUGH MY ENTIRE PILE OF PINK!")
}
}