class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return [this.name, this.age];
    }
}

class GraduateStudent extends Student {
    constructor(name, age, degree) {
        super(name, age); 
        this.degree = degree;
    }
    showDegree() {
        return [this.name, this.age, this.degree];
    }
}

const std1 = new GraduateStudent("Aamnah", 19, "Software Engineering");
console.log(std1.introduce());
console.log(std1.showDegree());
