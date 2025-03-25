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
let title = {
    title: 
}