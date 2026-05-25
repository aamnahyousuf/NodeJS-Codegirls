import fs from "fs";
import readline from "readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const FILE_NAME = "students.json";

function getStudents() {
    const data = fs.readFileSync(FILE_NAME);
    return JSON.parse(data);
}

function saveStudents(students) {
    fs.writeFileSync(FILE_NAME, JSON.stringify(students, null, 2));
}

// Main Menu
function menu() {
    console.log(`
1. Add Student
2. View All Students
3. Search Student by Name
4. Update Student Marks
5. Delete Student
6. Exit`);

    rl.question("Choose an option: ", (choice) => {

        switch (choice) {

            case "1":
                addStudent();
                break;

            case "2":
                viewStudents();
                break;

            case "3":
                searchStudent();
                break;

            case "4":
                updateMarks();
                break;

            case "5":
                deleteStudent();
                break;

            case "6":
                console.log("Program exited.");
                rl.close();
                break;

            default:
                console.log("Invalid option.");
                menu();
        }
    });
}

// 1. Add Student
function addStudent() {

    rl.question("Enter student name: ", (name) => {

        rl.question("Enter marks: ", (marks) => {

            const students = getStudents();

            const student = {
                id: function newID(){
                    lastID = students[students.length].id;
                    console.log(lastID);
                },
                name,
                marks: Number(marks)
            };

            students.push(student);

            saveStudents(students);

            console.log("Student added successfully.");

            menu();
        });
    });
}

// 2. View Students
function viewStudents() {

    const students = getStudents();

    console.log("\nStudents List:");
    console.log(students);

    menu();
}

// 3. Search Student
function searchStudent() {

    rl.question("Enter student name: ", (name) => {

        const students = getStudents();

        const student = students.find(
            s => s.name.toLowerCase() === name.toLowerCase()
        );

        if (student) {
            console.log(student);
        } else {
            console.log("Student not found.");
        }

        menu();
    });
}

// 4. Update Marks
function updateMarks() {

    rl.question("Enter student ID: ", (id) => {

        rl.question("Enter new marks: ", (marks) => {

            const students = getStudents();

            const student = students.find(
                s => s.id == id
            );

            if (student) {
                student.marks = Number(marks);

                saveStudents(students);

                console.log("Marks updated.");
            } else {
                console.log("Student not found.");
            }

            menu();
        });
    });
}

// 5. Delete Student
function deleteStudent() {

    rl.question("Enter student ID: ", (id) => {

        let students = getStudents();

        const filteredStudents = students.filter(
            s => s.id != id
        );

        saveStudents(filteredStudents);

        console.log("Student deleted.");

        menu();
    });
}

// Start Program
menu();