function register(student, done) {
  console.log("Registering...");
  done({ ...student, registered: true });
}

function verifyDocuments(student, done) {
  console.log("Verifying documents...");
  done({ ...student, verified: true });
}

function processFee(student, done) {
  console.log("Processing fee...");
  done({ ...student, feePaid: true });
}

function generateRollNumber(student, done) {
  console.log("Generating roll number...");
  done({ ...student, rollNo: "CS-2024-101" });
}

function startClasses(student, done) {
  console.log("Starting classes...");
  done({ ...student, classesStarted: true });
}


function registerStudent(student) {
  register(student, function(s1) {
    verifyDocuments(s1, function(s2) {
      processFee(s2, function(s3) {
        generateRollNumber(s3, function(s4) {
          startClasses(s4, function() {
            console.log("All done!");
          });
        });
      });
    });
  });
}

registerStudent({ name: "Aamnah", id: 101 });