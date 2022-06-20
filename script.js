let userInput, 
    pointUser=0, 
    pointCPU=0,
    gameResult="Ready?!";

function clickRock(){
    userInput=0;
    const cpuInput= randomize();
    if(cpuInput===1){
        //lose
        pointCPU++
        gameResult= "LOSE";
    }
    else if(cpuInput===2){
        //win
        pointUser++
        gameResult= "WIN";
    }
    else{
        gameResult= "TIE";
    }
    updateDisplay()
    return 
}

function clickPaper(){
    userInput=1;
    const cpuInput= randomize();
    if(cpuInput===0){
        //win
        pointUser++;
        gameResult= "WIN";
    }
    else if(cpuInput===2){
        //lose
        pointCPU++
        gameResult= "LOSE";
    }
    else{
        gameResult= "TIE";
    }
    updateDisplay()
    return 
}

function clickScissor(){
    userInput=2;
    const cpuInput= randomize();
    if(cpuInput===0){
        //lose
        pointCPU++
        gameResult= "LOSE";
    }
    else if(cpuInput===1){
        //win
        pointUser++
        gameResult= "WIN";
    }
    else{
        gameResult= "TIE";
    }
    updateDisplay()
    return 
}

function randomize(){
    //cpuNumber, 0=Rock, 1=Paper, 2=Scissors
    let numCPU= Math.floor(Math.random() * 3);
    if(numCPU==0){
        document.getElementById("displayCPUChoice").innerHTML = "Rock"
    }
    else if(numCPU==1){
        document.getElementById("displayCPUChoice").innerHTML = "Paper"
    }
    else{
        document.getElementById("displayCPUChoice").innerHTML = "Scissor"
    }
    return numCPU ;
}

function updateDisplay(){
    document.getElementById("pointCounterYou").innerHTML = pointUser;
    document.getElementById("pointCounterCPU").innerHTML = pointCPU;
    document.getElementById("result").innerHTML=gameResult
}

function resetScore(){
    pointCPU=0;
    pointUser=0;
    updateDisplay();
    return
}