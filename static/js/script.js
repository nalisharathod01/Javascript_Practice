//Challenge 1: your age in days 
function ageInDays(){
    var birthyear = prompt("what year you were born ?");
    var age = (2019- birthyear)* 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + age + ' days old!!');
    h1.setAttribute('id' , 'age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}

//Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= "https://cdn2.thecatapi.com/images/4i9.gif"
    div.appendChild(image);
    
}

//Challenge 3: Rock, Paper,Siccors
function rpsGame(yourChoice){
   console.log(yourChoice);
 var humanChoice , botChoice;
humanChoice = yourChoice.id;
   botChoice = numberToChoice(randToRpsInt());
    console.log("Computer Chioce" ,botChoice);
   results = decideWinner(humanChoice,botChoice);
   console.log(results);
   //message = finalMessage(results);
   //rpsFrontEnd(yourChoice.id,botChoice, message)
}
function randToRpsInt(){
    Math.floor(Math.random() *3);
}

function numberToChoice(number) {
    return ['rock' , 'paper' , 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1 , 'rock': 0.5 , 'paper': 0},
        'paper': {'rock': 1 , 'paper': 0.5 , 'scissors': 0},
        'scissors': {'paper': 1 , 'scissors': 0.5 , 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}