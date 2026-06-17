import express from "express";
import cookieSession from "cookie-session";

const app = express();
const PORT = 8000;

const USER = { id: "STD01", name: "Aamnah", email: "aamnah@gmail.com", password: "pass1234" };

app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["lms-secret-key"],
    maxAge: 60 * 1000, // 1 minute
  })
);

// ── Generate session ID ──
function generateSessionId() {
  return Math.floor(Date.now() / 60e3); 
}

// ── Log session info on every request ──
app.use((req, res, next) => {
  req.session.views = (req.session.views || 0) + 1;
  console.log("Session ID:", req.session.sessionId ?? "none", "| Logged in:", !!req.session.user, "| Visit Count: ", req.session.views);
  next();
});

// ── Login ──
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email !== USER.email || password !== USER.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.session.sessionId = generateSessionId(); 
  req.session.user = { id: USER.id, name: USER.name, email: USER.email };

  res.json({ message: "Login successful", sessionId: req.session.sessionId, user: req.session.user });
});

//------ Profile Route -------

app.get("/std/profile", (req, res) => {
  if (req.session.sessionId == null){
    return res.status(401).json({message: "Student not logged in!"});
  }
  else 
    res.json({user: req.session.user})
})

//---------- Dashboard Route

app.get("/std/dashboard", (req, res) => {
  if (req.session.sessionId == null){
    return res.status(401).json({message: "Student not logged in!"});
  }
  else 
    res.json({message: "Valid session exists:", sessionId: req.session.sessionId})
})

// ------ logout Route -------

app.get("/std/logout", (req, res) =>{
  req.session = null;
  res.end("Profile logged out.");
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});