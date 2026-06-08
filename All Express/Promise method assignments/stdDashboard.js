import express from "express";
const app = express();
const PORT = 3000;

function getStudentProfile(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const profileStatus = true;
      if (profileStatus) 
      resolve("Profile Loaded");
      else
      return reject(new Error("Student Profile is missing"));
    }, 300);
  });
}
 
function getEnrolledCourses(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const courses = true;
      if (courses)
      resolve("Courses loaded.");
    else {
      return reject(new Error("Failed to load courses."));
    }
    }, 500);
  });
}
 
function getNotifications(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const notifs = true;
      if (notifs) 
      resolve("Notifications..");
    else
      return reject(new Error("Failed to load notifications."));
    }, 200);
  });
}
 
// ─────────────────────────────────────────────
// Route: GET /dashboard/:studentId
// Loads all data simultaneously using Promise.all
// Dashboard is shown only when ALL data is ready
// ─────────────────────────────────────────────
 
app.get("/dashboard/:studentId", (req, res) => {
  const { studentId } = req.params;
 
  // Promise.all fetches all three simultaneously
  // If ANY promise rejects, the whole thing fails (fail-fast)
  Promise.all([
    getStudentProfile(studentId),
    getEnrolledCourses(studentId),
    getNotifications(studentId),
  ])
    .then(([profile, courses, notifications]) => {
      // All three resolved — dashboard is ready
      res.json({
        success: true,
        message: "Dashboard loaded successfully",
        dashboard: {
          profile,
          courses,
          notifications,
        },
      });
    })
    .catch((error) => {
      // Any one failure means the dashboard cannot be shown
      res.status(500).json({
        success: false,
        message: "Failed to load dashboard",
        error: error.message,
      });
    });
});
 
// ─────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────
 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Try: GET /dashboard/S001`);
});