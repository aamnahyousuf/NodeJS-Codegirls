const records = {
    grade1: {
        gradeId: 1,
        students: {
            Hurma: {
                rollNumber: 1,
                percentage: 98,
                rank: 1
            },
            Huzaifa: {
                rollNumber: 2,
                percentage: 23,
                rank: 3
            },
            Huraim: {
                rollNumber: 3,
                percentage: 54,
                rank: 2
            }
        },
        subjects: ["Eng", "Maths", "Science"],
    }
}

// console.log(records);
const class1 = records.grade1;
// console.log(class1);
const allStudents = class1.students;
console.log(allStudents);

let firstPosition;
for (let name in allStudents) {
  if (allStudents[name].rank === 1) {
    firstPosition = name;
    break;
  }
}

console.log("Top rank: ", firstPosition);
