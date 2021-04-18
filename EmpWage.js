console.log("Welcone to employee wage computation");

//UC 1
/* check employee status */
let isPresent = 1;
let empCheck = Math.floor(Math.random()*2);
if(empCheck == 1)
	console.log("Present");
else
	console.log("Not Present");

//UC 2

let EMP_RATE_PER_HOUR = 20;

let empHrs = 0;
let empWage = 0;
let isPresent = 1;

let empCheck = Math.floor(Math.random()*2);
if(empCheck == 1) {
	console.log("Present");
	empHrs = 8;
} else {
	console.log("Not Present");
	empHrs = 0;
}

empWage = empHrs*EMP_RATE_PER_HOUR;
console.log(empWage);