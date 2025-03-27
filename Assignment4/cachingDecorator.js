"use strict"

function cachingDecorator(f, n){
    let cache = undefined;
    let numberOfCacheAccess;

    //returns g function
    return function(){

        if (cache === undefined || numberOfCacheAccess >= n){
            cache = f();
            numberOfCacheAccess = 0;
        }

        numberOfCacheAccess++;
        return cache;
    };
}

/* Do not change f() */
function f(){
    let value = Math.random();
    console.log(`f has been invoked, result is ${value}`);
    return value;
}

let g = cachingDecorator(f, 3);
//since numbers are randomly generated, you will get different numbers
console.log(g()); //f has been invoked, result is 0.5157221
console.log(g()); //0.5157221
console.log(g()); //0.5157221
console.log(g()); //f has been invoked, result is 0.8924242
console.log(g()); //0.8924242
console.log(g()); //0.8924242
console.log(g()); //f has been invoked, result is 0.1713458