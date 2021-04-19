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

//UC 4
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let NUM_OF_WORKING_DAYS = 2;

let empHrs = 0;
let empWage = 0;
let totalWage = 0;
for(let day=0; day<NUM_OF_WORKING_DAYS; day++) {
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
totalWage += empWage;
}
console.log(totalWage)

//UC 5
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let MAX_HRS_IN_MONTH = 10;
let NUM_OF_WORKING_DAYS = 2;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWage = 0;
let totalWorkingDays = 0;

while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
	totalWorkingDays <= NUM_OF_WORKING_DAYS) {
	let empCheck = Math.floor(Math.random()*3);
	totalWorkingDays++;totalEmpHrs
	switch(empCheck) {
		case IS_PART_TIME:
			empHrs = 4;
		default:
			empHrs = 0;
	}
	totalEmpHrs += empHrs;
}
totalWage = totalEmpHrs*EMP_RATE_PER_HOUR;
console.log(totalWage);

//UC 6
console.log("Welcome to Employee Wage Computation Program");
const FULL_DAY_WAGE = 20;
const FULL_DAY_WORKING_HOURS = 8;
const PART_TIME_WORKING_HOURS = 4;
const MAX_WORKING_HOURS = 100;
const MAX_WORKING_DAYS = 20
let totalWorkingHours = 0;
let totalWorkingDays = 0;

function attendence() {

    for (totalWorkingDays = 1; totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours <= MAX_WORKING_HOURS; totalWorkingDays++) {
        let employee_Attendence = Math.floor(Math.random() * 3);

        switch (employee_Attendence) {
            case 0:
                console.log("Employee is Present \t\t Daily Wage = " + FULL_DAY_WAGE * FULL_DAY_WORKING_HOURS);
                totalWorkingHours += FULL_DAY_WORKING_HOURS;
                break;
            case 1:
                console.log("Employee is Present Part Time \t Daily Wage = " + FULL_DAY_WAGE * PART_TIME_WORKING_HOURS);
                totalWorkingHours += PART_TIME_WORKING_HOURS;
                break;
            case 2:
                console.log("Employee is Absent \t\t Daily Wage = 0");
                break;
        }
    }
}

attendence();
console.log("Total Working Hours = " + totalWorkingHours);
console.log("Total Working Days = " + totalWorkingDays);



