    let userscore=0;
    let computerscore=0;
    let msg=document.querySelector("#output");
    let youc=document.querySelector("#you");
    let compc=document.querySelector("#comp");
    let msg1=document.querySelector(".msg-cont");
    const choices =document.querySelectorAll(".choice");
    let compscore=0;
    let usercore=0;
    const showWinner=(userWin,userinp,compinp)=>{
        if(userWin){
            usercore++;
            youc.innerText=usercore;
            console.log("win")
            msg.innerText=`You win.(${userinp} beats ${compinp})`;
            msg1.style.backgroundColor = "green";

        }
        else{
            compscore++;
            compc.innerText=compscore;
            msg.innerText=`You loose.(${compinp} beats ${userinp})`;
            msg1.style.backgroundColor = "red";
        }
        
    }
    const drawGame=()=>{
        msg.innerText="Game Draw";
        msg1.style.backgroundColor = "#081b31";
    }
    const playGame =(choice)=>{
        let userinp=choice;
        let compinp=computerres();
        let userWin = false; // Initialize userWin outside the if-else blocks
        
        if(userinp===compinp){
            drawGame();
        }
        else{
            userWin=true; // Default to true, then check conditions
            if(userinp==="rock"){
                userWin=compinp==="paper" ? false : true;
            }
            else if(userinp==="paper"){
                userWin=compinp==="scissors" ? false : true;
            }
            else{
                userWin=compinp==="rock" ? false : true;
            }
            showWinner(userWin,userinp,compinp);
        }
    }

    const computerres=()=>{
        let options=["rock","paper","scissors"];
        s=Math.floor(Math.random()*3);
        return options[s];
    }
    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userchoiceid=choice.getAttribute("id");
            playGame(userchoiceid);
        });

    });
