import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS so your frontend can communicate with this backend
app.use(cors());
// Parse incoming JSON request bodies
app.use(express.json());

// ------------------------------------------------------------------
// 1. Root Test Route
// ------------------------------------------------------------------
app.get("/", (req, res) => {
  res.json({ message: "Parivestra AI Tutor Backend is running locally!" });
});

// ------------------------------------------------------------------
// 2. Simulated Local AI Tutor (Zero API keys required!)
// ------------------------------------------------------------------
app.post("/api/tutor/chat", (req, res) => {
  const { prompt, subject = "General" } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Please provide a question." });
  }

  const lowerPrompt = prompt.toLowerCase();
  let responseText = `[Local AI Tutor - ${subject} Module]\n\n`;

  // Dynamic simulated response based on keywords
  if (lowerPrompt.includes("react") || lowerPrompt.includes("component")) {
    responseText += "A React component is a self-contained, reusable block of UI. Try using the 'useState' hook to keep track of dynamic data in your user interface!";
  } else if (lowerPrompt.includes("javascript") || lowerPrompt.includes("js")) {
    responseText += "JavaScript drives your web logic. Focus your learning on modern ES6 features like arrow functions, array operations (.map, .filter), and async/await for network requests.";
  } else if (lowerPrompt.includes("css") || lowerPrompt.includes("flexbox")) {
    responseText += "Flexbox is essential for responsive designs! Use 'display: flex' on parent containers with properties like 'justify-content' and 'align-items' to align elements easily.";
  } else if (lowerPrompt.includes("html")) {
    responseText += "HTML (HyperText Markup Language) is the backbone of web structures. Think of it as the structural framework for organizing headings, paragraphs, buttons, and layouts.";
  } else {
    responseText += `That is a great question! To understand "${prompt}", break the topic down into smaller concepts. Let's work through a step-by-step example together whenever you are ready!`;
  }

  res.json({
    prompt,
    subject,
    response: responseText,
    timestamp: new Date().toISOString()
  });
});

// ------------------------------------------------------------------
// 3. Learning Path Route
// ------------------------------------------------------------------
app.get("/api/learning-path", (req, res) => {
  res.json([
    { id: 1, title: "HTML & Web Basics", status: "completed", stepOrder: 1 },
    { id: 2, title: "CSS Flexbox & Layouts", status: "current", stepOrder: 2 },
    { id: 3, title: "JavaScript ES6+ Syntax", status: "locked", stepOrder: 3 },
    { id: 4, title: "React Component Architecture", status: "locked", stepOrder: 4 },
    { id: 5, title: "Connecting APIs and Databases", status: "locked", stepOrder: 5 }
  ]);
});

// ------------------------------------------------------------------
// 4. Subjects Route
// ------------------------------------------------------------------
app.get("/api/subjects", (req, res) => {
  res.json([
    { id: "cs", name: "Computer Science", code: "CS101", progress: 65, description: "Algorithms, Data Structures & Web Development" },
    { id: "math", name: "Mathematics", code: "MATH101", progress: 40, description: "Algebra, Calculus & Problem Solving" },
    { id: "physics", name: "Physics", code: "PHYS101", progress: 25, description: "Classical Mechanics & Fundamentals" },
    { id: "ai", name: "AI & Data Science", code: "AI101", progress: 85, description: "Machine Learning, Python & Neural Networks" }
  ]);
});

// ------------------------------------------------------------------
// 5. Practice & Quizzes Route
// ------------------------------------------------------------------
app.get("/api/practice/quizzes", (req, res) => {
  res.json([
    {
      id: "quiz-react",
      title: "React Fundamentals Quiz",
      subject: "Computer Science",
      questions: [
        { id: 1, question: "Which hook manages component state?", options: ["useEffect", "useState", "useRef", "useContext"], answer: 1 },
        { id: 2, question: "What tool does this project use to build React?", options: ["Vite", "Webpack", "Parcel", "Gulp"], answer: 0 }
      ]
    }
  ]);
});

app.post("/api/practice/submit", (req, res) => {
  const { score, total } = req.body;
  res.json({
    message: "Quiz submitted successfully!",
    score,
    total,
    percentage: Math.round((score / total) * 100)
  });
});

// ------------------------------------------------------------------
// 6. Progress Route
// ------------------------------------------------------------------
app.get("/api/progress", (req, res) => {
  res.json({
    totalStudyMinutes: 240,
    streakDays: 4,
    quizzesCompleted: 3,
    averageScore: 90,
    weeklyActivity: [
      { day: "Mon", minutes: 30 },
      { day: "Tue", minutes: 45 },
      { day: "Wed", minutes: 60 },
      { day: "Thu", minutes: 15 },
      { day: "Fri", minutes: 90 },
      { day: "Sat", minutes: 0 },
      { day: "Sun", minutes: 0 }
    ]
  });
});

// ------------------------------------------------------------------
// 7. Resources Route
// ------------------------------------------------------------------
app.get("/api/resources", (req, res) => {
  res.json([
    { id: 1, title: "Official React Documentation", category: "React", type: "Docs", url: "https://react.dev" },
    { id: 2, title: "JavaScript.info Guide", category: "JavaScript", type: "Tutorial", url: "https://javascript.info" },
    { id: 3, title: "MDN Web Docs", category: "Web Standards", type: "Reference", url: "https://developer.mozilla.org" }
  ]);
});

// ------------------------------------------------------------------
// 8. Settings Route
// ------------------------------------------------------------------
let mockUserSettings = {
  dailyGoalMinutes: 30,
  tutorPersona: "supportive",
  theme: "light",
  notifications: true
};

app.get("/api/settings", (req, res) => {
  res.json(mockUserSettings);
});

app.post("/api/settings", (req, res) => {
  mockUserSettings = { ...mockUserSettings, ...req.body };
  res.json({ message: "Settings saved successfully!", settings: mockUserSettings });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
