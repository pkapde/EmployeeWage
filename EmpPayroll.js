class EmployeePayrollData{
    startDate;

    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get id(){
        return this._id;
    }
    set id(id){
        console.log("setting id :"+id);
        this._id = id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
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

    //toString
    toString(){
        const options = {year: 'numeric', month: 'long', day:'numeric'};
        const empDate = this.startDate == undefined ? "undefined":
                        this.startDate.toLocaleDateString("en-IN",options);
        return "id = "+this.id+",name = "+this.name+",salary = "+this.salary +",gender = "+this.gender+",start date = "+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());