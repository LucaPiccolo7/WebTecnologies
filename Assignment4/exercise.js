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

    if (
        (typeof studentName === "string") && 
        (typeof age === "number") && 
        (typeof isEnrolled === "boolean") && 
        (typeof course === "string")
    ){
        if (isEnrolled)
            console.log(`${studentName} (${age}) is enrolled in the ${course} course`);
        else
            console.log(`${studentName} (${age}) is NOT enrolled in the ${course} course`);
    }
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

function Director(firstName, lastName, birthYear, deathYear=undefined){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.deathYear = deathYear;
    this.describe = describe;
}

function Movie(title, director, year, is_part_of_a_saga=false){
    this.title = title;
    this.director = director;
    this.year = year;
    this["is_part_of_a_saga"] = is_part_of_a_saga;
    this.describe = describe;
}

let director = new Director("Denis", "Villeneuve", "03/08/1967");
movie = new Movie("Dune", director, 2021, true);
director.describe();
movie.describe();

delete movie["is part of a saga"];

//Domanda: e' possibile controllare che movie1, movie2 e movie3 siano di tipo "Movie"?
function Trilogy(title, movie1, movie2, movie3) {

    if (
        (typeof title === "string") &&
        (typeof movie1 === "object") &&
        (typeof movie2 === "object") &&
        (typeof movie3 === "object")
    ){
        this.title = title;
        this.movie1 = movie1;
        this.movie2 = movie2;
        this.movie3 = movie3;
    }
}