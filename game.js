// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");

function random_numbers() {
    var ram1 = Math.floor(Math.random() * 101);
    var ram2 = Math.floor(Math.random() * 101);
    num1div.textContent = ram1;
    num2div.textContent = ram2;
}

random_numbers()

// Iteration 3: Creating variables required to make the game functional
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");
var Operator;
var score = 0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var num3div = document.getElementById("number3");
var number3;

// Iteration 5: Creating a randomise function to make the game functional
var randomise = () => {
    var ram1 = Math.floor(Math.random() * 101);
    var ram2 = Math.floor(Math.random() * 101);


    if (ram1 < ram2){
        var swap = ram1;
        ram2 = ram1;
        ram2 = swap;
    }
    Operator = Math.round(Math.random() * 5);
    switch(Operator) {
        case 1:
            number3 = ram1 + ram2;
            break;
        case 2:
            number3 = ram1 - ram2;
            break;
        case 3:
            number3 = ram1 * ram2;
            break; 
        case 4:
            number3 = Math.floor(ram1 / ram2);
            break;
        case 5:
            number3 = ram1 % ram2;
            break;
        case 0:
            random_numbers();
    }

    num1div.innerHTML = ram1;
    num2div.innerHTML = ram2;
    num3div.innerHTML = number3;

    console.log( ram1 + " " + ram2 + " " + number3 + " " + Operator);
    
}
randomise();

// Iteration 6: Making the Operators (button) functional

plus.onclick = () => {
    if (parseInt(num1div.textContent) + parseInt(num2div.textContent) === number3){
        score++;
        randomise(); 
        resetTime(timerId);
        localStorage.setItem("score", score);
        console.log(score)
    } else {
        location.href = "gameover.html?score=" + score;
    }

};

minus.onclick = () => {
    if (parseInt(num1div.textContent) - parseInt(num2div.textContent) === number3){
        score++;
        randomise(); 
        resetTime(timerId);
        localStorage.setItem("score", score);
        console.log(score)
    } else {
        location.href = "gameover.html?score=" + score;
    }

};

multiply.onclick = () => {
    if (parseInt(num1div.textContent) * parseInt(num2div.textContent) === number3){
        score++;
        randomise(); 
        resetTime(timerId);
        localStorage.setItem("score", score);
        console.log(score)
    } else {
        location.href = "gameover.html?score=" + score;
    }
    
};

divide.onclick = () => {
    if (Math.floor(parseInt(num1div.textContent) / parseInt(num2div.textContent)) === number3){
        score++;
        randomise()
        resetTime(timerId);
        localStorage.setItem("score", score);
        console.log(score)
    } else {
        location.href = "gameover.html?score=" + score;
    }
   
};

modulus.onclick = () => {
    if (parseInt(num1div.textContent) % parseInt(num2div.textContent) === number3){
        score++;
        randomise();
        resetTime(timerId);
        localStorage.setItem("score", score);
        console.log(score)
    } else {
        location.href = "gameover.html?score=" + score;
    }
   
};

// Iteration 7: Making Timer functional

var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if(time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}

startTimer(); 
