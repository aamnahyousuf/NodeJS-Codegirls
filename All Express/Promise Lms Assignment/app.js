const loginStudent = new Promise((resolve, reject) => {
    const login = true;
    if(login){
        resolve("Student Logged in!");
    }
    else{
        reject("Student not registered!");
    }
});

const getProfile = new Promise((resolve, reject) => {
    const profile = true;
    if(profile){
        resolve("Profile made!");
    }
    else{
        reject("No profile exists.");
    }
});

const getCourses = new Promise((resolve, reject) => {
    const course = true;
    if(course){
        resolve("Here are your courses: ");
    }
    else{
        reject("No courses exist");
    }
});

const getCert = new Promise((resolve, reject) => {
    const cert = true;
    if(cert){
        resolve("Here's your certificate");
    }
    else{
        reject("You are not eligible for a certificate");
    }
});

loginStudent.then(function (res){
    console.log(res);
    return (getProfile);
}).then ((res) => {
    console.log(res);
    return (getCourses);
}).then ((res) =>{
    console.log(res);
    return (getCert);
}).then ((res) =>{
    console.log(res);
}).catch ((res) =>{
    console.log(res);
});