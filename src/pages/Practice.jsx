import { useEffect, useState } from "react";
import { PageHeader } from "../components/UI";
import { questionBank } from "../assessment/questionBank";
import {
  saveProgress,
  getProgress,
} from "../assessment/progressStorage";
import "../assessment/assessment.css";

export default function Practice() {
  const [page, setPage] = useState("dashboard");
  const [subject, setSubject] = useState("All");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState("");
  const [history, setHistory] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const subjects = [
    "All",
    ...new Set(questionBank.map(q => q.topic)),
  ];

  async function loadHistory() {
    try {
      const records = await getProgress();
      setHistory(records.reverse());
    } catch (err) {
      console.error("Could not load progress:", err);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);

  const totalAttempts = history.length;

  const averageScore = totalAttempts
    ? Math.round(
        history.reduce((sum, item) => sum + item.percentage, 0) /
        totalAttempts
      )
    : 0;

  const totalCorrect = history.reduce(
    (sum, item) => sum + (item.correctAnswers || 0),
    0
  );

  function startQuiz() {
    const filtered = questionBank.filter(q =>
      (subject === "All" || q.topic === subject) &&
      q.difficulty === difficulty
    );

    if (!filtered.length) {
      setError("No questions available for this selection.");
      return;
    }

    setError("");
    setQuestions(filtered);
    setCurrent(0);
    setAnswers([]);
    setSelected("");
    setResult(null);
    setPage("quiz");
  }

  async function submitAnswer() {
    if (!selected) {
      setError("Please select an answer first.");
      return;
    }

    const updated = [
      ...answers,
      {
        question: questions[current].question,
        selected,
        correctAnswer: questions[current].answer,
        isCorrect: selected === questions[current].answer,
        topic: questions[current].topic,
      },
    ];

    setAnswers(updated);
    setSelected("");
    setError("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      await finishQuiz(updated);
    }
  }

  async function finishQuiz(finalAnswers) {
    const correct = finalAnswers.filter(a => a.isCorrect).length;
    const incorrect = finalAnswers.length - correct;
    const percentage = Math.round(
      (correct / finalAnswers.length) * 100
    );

    const newResult = {
      subject,
      difficulty,
      totalQuestions: finalAnswers.length,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      percentage,
      answers: finalAnswers,
    };

    setResult(newResult);
    setPage("result");
    setSaving(true);

    try {
      await saveProgress(newResult);
      await loadHistory();
    } catch (err) {
      console.error("Could not save progress:", err);
      setError("Result shown, but progress could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  function getRecommendation() {
    if (!history.length) {
      return "Complete your first assessment to receive revision recommendations.";
    }

    const latest = history[0];
    const mistakes = (latest.answers || [])
      .filter(a => !a.isCorrect)
      .map(a => a.topic);

    if (!mistakes.length) {
      return "Great work! Revise once more and try the next difficulty level.";
    }

    return `Focus on revising: ${[...new Set(mistakes)].join(", ")}.`;
  }

  function goDashboard() {
    setPage("dashboard");
    setError("");
  }

  const score = answers.filter(a => a.isCorrect).length;

  return (
    <div className="m7-dashboard">
      <PageHeader
        title="Assessment & Practice"
        description="Test your knowledge, track your progress and improve your skills."
      />

      {error && <div className="m7-error">{error}</div>}

      {page === "dashboard" && (
        <>
          <section className="m7-welcome">
            <h2>Welcome to your learning space!</h2>
            <p>
              Assess your knowledge, track your progress and
              identify topics that need more practice.
            </p>
          </section>

          <section className="m7-stats">
            <div className="m7-stat-card">
              <h3>Total Assessments</h3>
              <strong>{totalAttempts}</strong>
            </div>

            <div className="m7-stat-card">
              <h3>Average Score</h3>
              <strong>{averageScore}%</strong>
            </div>

            <div className="m7-stat-card">
              <h3>Correct Answers</h3>
              <strong>{totalCorrect}</strong>
            </div>
          </section>

          <div className="m7-content-grid">
            <section className="m7-panel">
              <h2>Start an Assessment</h2>
              <p>Choose your subject and difficulty level.</p>

              <label>Choose Subject</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
              >
                {subjects.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>

              <label>Choose Difficulty</label>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <button className="m7-primary" onClick={startQuiz}>
                Start Assessment
              </button>
            </section>

            <section className="m7-panel">
              <h2>Revision Recommendation</h2>
              <div className="m7-recommendation">
                {getRecommendation()}
              </div>

              <h3 style={{ marginTop: 25 }}>Recent Activity</h3>
              {history.length > 0 ? (
                <p>
                  Latest score: {history[history.length - 1].percentage}%
                </p>
              ) : (
                <p>Your assessment activity will appear here.</p>
              )}
            </section>
          </div>
        </>
      )}

      {page === "quiz" && questions.length > 0 && (
        <section className="m7-panel m7-quiz">
          <div className="m7-quiz-header">
            <h2>{subject} Assessment</h2>
            <span>
              Question {current + 1} of {questions.length}
            </span>
          </div>

          <div className="m7-progress-track">
            <div
              className="m7-progress-fill"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <p>Difficulty: {difficulty}</p>

          <h2 className="m7-question">
            {questions[current].question}
          </h2>

          {questions[current].options.map((option, index) => (
            <button
              key={index}
              className={`m7-option ${
                selected === option ? "selected" : ""
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}

          <button
            className="m7-primary"
            onClick={submitAnswer}
            disabled={!selected || saving}
          >
            {current + 1 === questions.length
              ? "Finish Assessment"
              : "Next Question"}
          </button>
        </section>
      )}

      {page === "result" && result && (
        <section className="m7-panel m7-result">
          <h2>Assessment Completed!</h2>
          <p>Your assessment summary</p>

          <div className="m7-stats">
            <div className="m7-stat-card">
              <h3>Score</h3>
              <strong>{result.percentage}%</strong>
            </div>

            <div className="m7-stat-card">
              <h3>Correct</h3>
              <strong>{result.correctAnswers}</strong>
            </div>

            <div className="m7-stat-card">
              <h3>Incorrect</h3>
              <strong>{result.incorrectAnswers}</strong>
            </div>
          </div>

          <h3>Revision Suggestions</h3>
          <div className="m7-recommendation">
            {result.answers.some(a => !a.isCorrect)
              ? `Revise these topics: ${[
                  ...new Set(
                    result.answers
                      .filter(a => !a.isCorrect)
                      .map(a => a.topic)
                  ),
                ].join(", ")}.`
              : "Excellent performance! Keep practising."}
          </div>

          {saving && <p>Saving your progress...</p>}

          <button className="m7-primary" onClick={goDashboard}>
            Back to Dashboard
          </button>

          <button
            className="m7-secondary"
            onClick={() => {
              loadHistory();
              setPage("progress");
            }}
          >
            View My Progress
          </button>
        </section>
      )}

      {page === "progress" && (
        <section className="m7-panel">
          <h2>Assessment History</h2>

          {history.length === 0 ? (
            <p>No assessment records yet.</p>
          ) : (
            history.map((item, index) => (
              <div className="m7-history-item" key={item.id || index}>
                <div>
                  <strong>{item.subject}</strong>
                  <p>
                    {item.difficulty} · {item.totalQuestions} questions
                  </p>
                  <p>
                    Correct: {item.correctAnswers} / {item.totalQuestions}
                  </p>
                </div>
                <strong>{item.percentage}%</strong>
              </div>
            ))
          )}

          <button className="m7-primary" onClick={goDashboard}>
            Back to Dashboard
          </button>
        </section>
      )}
    </div>
  );
}