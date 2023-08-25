
let choices = ["rock", "paper", "scissors"]
let random = Math.random(Math.floor(1,3));
if(random == 1){
    console.log("Rock")
}
    else if(random){}



    switch(random){

        case 1:
            console.log("rock")
            break;
            case 2:
                console.log('paper')
                break;
                case 3:
                    console.log("scissors")
                    break;
                    default:
                        console.log('tie')
    }

const rock = document.querySelector("#rock")
rock.addEventListener("click",(e)=>{
    console.log("rock")
    
});

const paper = document.querySelector("#paper")
paper.addEventListener("click",(e)=>{
    console.log("paper")
});

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click",(e)=>{
    console.log("scissors")
});

const play = document.querySelector("#play")
play.addEventListener("click",(e)=>{
    console.log("play")
    document.querySelectorAll(".game").forEach((e)=>{
        e.style.display="inline-block"
        play.style.display ='none'
    })
});