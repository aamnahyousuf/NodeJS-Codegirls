function register(student, callback) {
  console.log("Registering Student...");
  setTimeout(() => callback(null, { ...student, registered: true }), 800);
}

function verifyDocuments(student, callback) {
  console.log("Verifying Documents...");
  setTimeout(() => callback(null, { ...student, verified: true }), 800);
}

function processFee(student, callback) {
  console.log("Processing Fee...");
  setTimeout(() => callback(null, { ...student, feePaid: true }), 800);
}

function generateRollNumber(student, callback) {
  console.log("Generating Roll Number...");
  setTimeout(() => callback(null, { ...student, rollNo: "CS-2024-101" }), 800);
}

function startClasses(student, callback) {
  console.log("Starting Classes...");
  setTimeout(() => callback(null, { ...student, classesStarted: true }), 800);
}


function registerStudent(student) {
  register(student, function (err, registered) {
    if (err) throw err;
    console.log("Student Registered");

    verifyDocuments(registered, function (err, verified) {
      if (err) throw err;
      console.log("Documents Verified");

      processFee(verified, function (err, feePaid) {
        if (err) throw err;
        console.log("Fee Submitted");

        generateRollNumber(feePaid, function (err, withRoll) {
          if (err) throw err;
          console.log("Roll Number Generated:", withRoll.rollNo);

          startClasses(withRoll, function (err, final) {
            if (err) throw err;
            console.log("Classes Started!");
            console.log("Final student data:", final);
          });
        });
      });
    });
  });
}

registerStudent({ name: "Aamnah", id: 101 });