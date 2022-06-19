let userInput, 
    pointUser=0, 
    pointCPU=0

function clickRock(){
    userInput=0;
    const cpuInput= randomize();
    if(cpuInput===1){
        //lose
        pointCPU++
    }
    else if(cpuInput===2){
        //win
        pointUser++
    }
    else{
        return
    }
    updateDisplay()
    return 
}

function clickPaper(){
    userInput=1;
    const cpuInput= randomize();
    if(cpuInput===0){
        //win
        pointUser++
    }
    else if(cpuInput===2){
        //lose
        pointCPU++
    }
    else{
        return
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
    }
    else if(cpuInput===1){
        //win
        pointUser++
    }
    else{
        return
    }
    updateDisplay()
    return 
}

function randomize(){
    //cpuNumber, 0=Rock, 1=Paper, 2=Scissors
    let numCPU= Math.floor(Math.random() * 3);
    if(numCPU==0){
        document.getElementById("displayCPUChoice").innerHTML = "Your Opponent Picked Rock"
    }
    else if(numCPU==1){
        document.getElementById("displayCPUChoice").innerHTML = "Your Opponent Picked Paper"
    }
    else{
        document.getElementById("displayCPUChoice").innerHTML = "Your Opponent Picked Scissor"
    }
    return numCPU ;
}

function updateDisplay(){
    document.getElementById("pointCounterYou").innerHTML = pointUser;
    document.getElementById("pointCounterCPU").innerHTML = pointCPU
}

function gameLogic(){
    const cpuInput= randomize;

}