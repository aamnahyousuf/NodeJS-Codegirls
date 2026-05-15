let class1 = {
    std1: {
        name: "Mehdi",
        grade: "A+",
        subjects: ["Eng", "Maths", "Comp"],
        percentage: "87%"
    },
  std2: {
        name: "Ibrahim",
        grade: "A",
        subjects: ["Eng", "Maths", "Comp"],
        percentage: "76%"
    },
    std3: {
        name: "Hurma",
        grade: "A+",
        subjects: ["Eng", "Maths", "Comp"],
        percentage: "91%"
    }
}

function schoolResult(grade){
    return{
        class1
    };
}
const {std1, std2, std3} = schoolResult();

console.log(schoolResult(class1));
