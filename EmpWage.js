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

//UC7.1 Calculate Total Wage using DailyWageArray
//sum function using arrow function
let totalWagefromArray=0;
                /*function sum(dailyWage)
                {
                    totalWagefromArray += dailyWage;
                }*/
EmployeeWage.empDailyWageArray.forEach(function(dailyWage){totalWagefromArray += dailyWage});
console.log("Total Wage from Array Helper Function "+totalWagefromArray);

//reduce function using Arrow Function
                /*function totalWages(totalWage,dailyWage)
                {
                    return totalWage+dailyWage;
                }*/
console.log("Using reduce functions "+EmployeeWage.empDailyWageArray.reduce(function(totalWage, dailyWage){ return totalWage+dailyWage},0));


//UC7.2 Mapping Day to DailyWage
let dayCount=0;
                /*function dailyWageMapping(dailyWage)
                {
                    return((++dayCount) + " = "+dailyWage);
                }*/
let MappedDailyWage = EmployeeWage.empDailyWageArray.map(function(dailyWage){return ((++dayCount) + " = "+dailyWage)});
console.log("Day wise Wage : ");
console.log(MappedDailyWage);


//UC7.3 Days when full time wage is 160
                /*function fullTimeWage(dailyWage)
                {
                    return dailyWage.includes("160");
                }*/
let fullWageDays= MappedDailyWage.filter(function(dailyWage){ return dailyWage.includes("160")});
console.log("Full Wage Days : ");
console.log(fullWageDays);


//UC7.4 First occurence of Full time wage in the array
console.log("First occurence of full time wage: "+MappedDailyWage.find(function(dailyWage){ return dailyWage.includes("160")}));


//UC7.5 Check If all elements of FullWagedDays array contains full time wage
console.log("Does all elements of FullWagedDays array contains full time wage :" +fullWageDays.every(function(dailyWage){ return dailyWage.includes("160")}));


//UC7.6 Check if there is any part time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Is there any part time wage in FullWageDays Array : "+ fullWageDays.some(isAnyPartTimeWage));
console.log ("Is there any part time wage in MappedDailyWage Array : "+ MappedDailyWage.some(isAnyPartTimeWage));


//UC7.7 Find number of working days using ArrayHelper Function
function FindWorkingDays(numberOfDays, dailyWage)
{
    if(dailyWage>0)
        return (numberOfDays+1);
    
    return numberOfDays;
}
let numberOfDays=0;
//let FindWorkingDays(dailyWage) => {(dailyWage>0) ? return(numberOfDays+1) : return(numberOfDays);}
console.log("Employee Worked for "+EmployeeWage.empDailyWageArray.reduce(FindWorkingDays,0)+" days");

console.log(EmployeeWage.TotalWageDailyWageMap);
//Computing total wage using map
console.log("Total wage of Employee is : "+ Array.from(EmployeeWage.TotalWageDailyWageMap.values()).reduce(function(totalWage, dailyWage){ return totalWage+dailyWage},0));

//Map
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) 
{
   return empHrs * WAGE_PER_HOUR;
}
function getWorkingHours(empCheck)
 { 
    switch (empCheck) 
    {
        case IS_FULL_TIME:
        console.log("Employee is Present for Full Time");  
        return FULL_TIME_HOURS;

        case IS_PART_TIME:
        console.log("Employee is Present for Part Time");   
        return PART_TIME_HOURS;
        
        default:
        console.log("Employee is Absent");
        return 0;
     }
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
   totalWorkingDays++;
   let empCheck = Math.floor(Math.random() * 10) % 3;
   let empHrs = getWorkingHours(empCheck);
   totalEmpHrs += empHrs;
   empDailyWageArr.push(calcDailyWage(empHrs));
   empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage) 
{
   return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
