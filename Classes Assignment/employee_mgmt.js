class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    showDetails(){
        return [this.name, this.salary];
    }
}

class Manager extends Employee{
    constructor(name, salary, dept){
        super(name, salary)
        this.department = dept;
    }
    manageTeam(){
        return [this.name, this.salary, this.department];
    }
}

const Manager1 = new Manager("Haider", "100k", "Finance");
console.log(Manager1.manageTeam());