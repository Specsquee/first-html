function funAnswer(){
alert("Welcome to my gum emporium");
let funAnswer = prompt("Are you here to grade my Javascript? YES or NO please!");

while(funAnswer == ""){
    funAnswer = prompt("Are you here to grade my Javascript? YES or NO I WILL NOT ASK AGAIN! (I will)");
}
if(funAnswer == "YES"){
    alert("I would like the max grade please kind kind TA or Teacher.");
    document.write("Please imagine this is some fancy Java feature here");
} 
else if (funAnswer == "NO"){
    alert("Hope you like the color pink...because of Gum")
    document.write("I told you...It is a lot of pink.");
} 

return funAnswer;
}

function swallowGum(){

    let gum = prompt ("How many pieces of gum do you swallow between 1 and 3?")
    for (let i = 0; i < gum; i++){
        document.write("<img src='gumwall.jpg' alt='gross wall' />");
        if(i == 2){
            break;
        }
    }
}


function treasureHunt(){

    let tHunt = prompt("Thanks for Before you explore the website would you like to find treasure? YES or NO please!");

    if(tHunt == "YES"){
        alert("Well go on and find it!");
        document.write("You have found my hidden gum treasure. Thank you for coming to the bottom of my website!");
}     
    else if(tHunt == "NO"){
        alert("Wow you are no fun!");
}
    else{
        alert("You must be a real hoot at a party.");
}

}