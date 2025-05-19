 let count = 0;

 const value = document.querySelector("#value");
 const btns = document.querySelectorAll(".btn");

 btns.forEach(btns=>{

    btns.addEventListener("click",e=>{

        let elemetId = e.currentTarget.id;

        if(elemetId === "decrease"){
            count--;    
        }else if(elemetId === "increase"){
            count++;            
        }
        else{(elemetId === "reset");
            count = 0;
        }
        
        value.textContent = count;
    });

    
});