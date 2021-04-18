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

let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;

let empHrs = 0;
let empWage = 0;

let empCheck = Math.floor(Math.random()*3);
if(empCheck == IS_PART_TIME) {
	console.log("Present");
	empHrs = 4;
} else if(empCheck == IS_FULL_TIME) {
	empHrs = 8;
} else {
	console.log("Not present");
	empHrs = 0;
}

//UC 3
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;
let empHrs = 0;
let empWage = 0;

let empCheck = Math.floor(Math.random()*3);
switch(empCheck) {
	case IS_PART_TIME:
		empHrs = 4;
		break;
	case IS_FULL_TIME:
		empHrs = 8;
		break;
	default:
		empHrs = 0;
}

empWage = empHrs*EMP_RATE_PER_HOUR;
console.log(empWage)