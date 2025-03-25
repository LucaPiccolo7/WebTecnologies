/*exercises*/
"use script"

/*1*/
let studentName = "Luca";
let age = 23;
let isEnrolled = true;
console.log(studentName);
console.log(age);
console.log(isEnrolled);
function studentInfo(studentName, age, isEnrolled, course="Web Tecnologies"){
    if (isEnrolled)
        console.log(`${studentName} (${age}) is enrolled in the ${course} course`);
    else
        console.log(`${studentName} (${age}) is NOT enrolled in the ${course} course`);
}
studentInfo(studentName, age);
studentInfo(studentName, age, isEnrolled, "INGSW");

/*2*/
let movie = {
    title: "District 9",
    director: {
        firstName: "Neill",
        lastName: "Blomkamp",
        birthYear: "25/09/1979",
        deathYear: undefined,
        describe: describe
    },
    year: "25/09/2009",
    "is part of a saga": false,
    describe: describe
}

function describe(){
    for(let key in this){
        if (typeof this[key] === "object")
            this[key].describe();
        else {
            if (!(typeof this[key] === "function"))
                console.log(`${key}: ${this[key]}`);
        }
    }
}

movie.describe();