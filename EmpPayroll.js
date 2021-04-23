class EmployeePayrollData{
    startDate;

    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.pinCode = params[5];
        this.email = params[6];

    }

    //getter and setter
    get id(){
        return this._id;
    }
    set id(id){
        let idRegex = RegExp('^[1-9][0-9]{0,}$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Id is incorrect: '+id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        let salaryRegex = RegExp("^[1-9][0-9]{0,}$");
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary is incorrect: '+salary;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw "Gender incorrect: "+gender+". Choose M or F";
    }
    get name(){
        this._name = _name;
    }
    set name(name){
        let nameRegex =RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
        this._name = name;
        }
        else throw 'Name Is Incorrect';
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(){
        if(startDate.getMonth()<=(new Date()).getMonth()
           &&startDate.getDay()<=(new Date()).getDay()
           &&startDate.getFullYear()<=(new Date()).getFullYear())
            this._startDate = startDate;
        else throw "Date is incorrect: "+startDate.toLocaleDateString("en-IN");
    }
    get pinCode(){
        return this._pinCode;
    }
    set pinCode(){
        let pinCode = RegExp('^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$');
        if(nameRegex.test(pinCode)){
            this._pinCode = pinCode;
            }
            else throw 'Pin Is Incorrect';
    }
    get email(){
        return this._email;
    }
    set email(){
        let email = RegExp('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}');
        if(nameRegex.test(email)){
            this._email = email;
            }
            else throw 'email Is Incorrect';
    }

    //toString
    toString(){
        const options = {year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate = this.startDate == undefined ? "undefined":
                        this.startDate.toLocaleDateString("en-IN",options);
        return "id = "+this.id+",name = "+this.name+",salary = "+this.salary +",gender = "+this.gender+",start date = "+empDate+",pinCode = "+this._pinCode+",email = "+this._email;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
//Fail case for name

let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());

let newEmployeePayrollData2 = new EmployeePayrollData(1,"Terr",30000,"F",new Date());
console.log(newEmployeePayrollData2.toString());

//Fail case for salary
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(2,"Mark",-2000,"F",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
//Fail case for gender
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(2,"Mark",2000,"G",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
//Fail Case for date
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(2,"Mark",2000,"M",new Date('2021-04-11T10:20:30Z'));
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.log(e);
}
//test case for 6 digit pincode
try{
    let newEmployeePayrollData = new EmployeePayrollData(2,"Mark",2500,"M",new Date('2021-04-11T10:20:30Z'),400021);
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case for taking alphabets at starting
try{
    let newEmployeePayrollData = new EmployeePayrollData(3,"joy",2550,"M",new Date('2021-04-11T10:20:30Z'),"A00021");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case for taking alphabets at ending
try{
    let newEmployeePayrollData = new EmployeePayrollData(3,"joy",2550,"M",new Date('2021-04-11T10:20:30Z'),"400020B");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case for taking 400 222 valid
try{
    let newEmployeePayrollData = new EmployeePayrollData(4,"john",2555,"M",new Date('2021-04-11T10:20:30Z'),"400 020");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case for taking valid email abc@xyz.com
try{
    let newEmployeePayrollData = new EmployeePayrollData(5,"juli",2560,"M",new Date('2021-04-11T10:20:30Z'),400020,"abc@.");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case to validate second part ie bridgelabz
try{
    let newEmployeePayrollData = new EmployeePayrollData(5,"juli",2560,"M",new Date('2021-04-11T10:20:30Z'),400020,"abc@bridgelabz.");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case to validate .co part
try{
    let newEmployeePayrollData = new EmployeePayrollData(5,"juli",2560,"M",new Date('2021-04-11T10:20:30Z'),400020,"abc@bridgelabx.co");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case to validate abc.xyz@bridgelabz
try{
    let newEmployeePayrollData = new EmployeePayrollData(5,"juli",2560,"M",new Date('2021-04-11T10:20:30Z'),400020,"abc.xyz@bridgelabz.co");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
//test case to validate country code ie IN
try{
    let newEmployeePayrollData = new EmployeePayrollData(5,"juli",2560,"M",new Date('2021-04-11T10:20:30Z'),400020,"abc.xyz@bridgelabz.co.in");
    console.log(newEmployeePayrollData.toString());
} catch(e){
    console.log(e);
}
