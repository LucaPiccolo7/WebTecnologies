"use strict"

/*3*/
function collatz(num){

    let acc = num;
    let steps = 0;

    while(acc !== 1){
        steps++;
        acc = calculateResult(acc);
    }

    console.log(`Collatz proven for n=${num}: sequence converges to 1 in ${steps}.`);

    function calculateResult(acc){
     
        let result;
    
        if (acc % 2 === 0)
            result = acc/2;
        else
            result = 3*acc + 1;
    
        return result;
    }
    
}

collatz(7);