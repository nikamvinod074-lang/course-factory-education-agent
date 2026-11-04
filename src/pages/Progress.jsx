import { useEffect, useState } from "react";
import { PageHeader } from "../components/UI";
import { getProgress } from "../assessment/progressStorage";
import "../assessment/assessment.css";

export default function Progress() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProgress() {
      try {
        const records = await getProgress();

        const sortedRecords = [...records].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setHistory(sortedRecords);
      } catch (err) {
        console.error("Progress loading error:", err);
        setError("Unable to load your progress.");
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, []);

  const totalAttempts = history.length;

  const totalQuestions = history.reduce(
    (sum, item) => sum + (item.totalQuestions || 0), 0
  );

  const totalCorrect = history.reduce(
    (sum, item) => sum + (item.correctAnswers || 0), 0
  );

  const averageScore = totalAttempts
    ? Math.round(
        history.reduce((sum, item) => sum + (item.percentage || 0), 0)
        / totalAttempts
      )
    : 0;

  const accuracy = totalQuestions
    ? Math.round((totalCorrect / totalQuestions) * 100)
    : 0;

  const weakTopics = {};

 history.forEach((attempt) => {
  (attempt.answers || []).forEach((answer) => {
    const topic = answer.topic || attempt.subject;

    if (!answer.isCorrect && topic) {
      weakTopics[topic] = (weakTopics[topic] || 0) + 1;
    }
  });
});

  const revisionTopics = Object.entries(weakTopics)
    .sort((a, b) => b[1] - a[1]);

  if (loading) {
    return <p>Loading your progress...</p>;
  }

  return (
    <div className="m7-dashboard">
      <PageHeader
        title="My Progress"
        description="Track your assessment performance and learning growth."
      />

      {error && <div className="m7-error">{error}</div>}

      <section className="m7-welcome">
        <h2>Your Learning Overview</h2>
        <p>
          Review your scores, accuracy and topics that need more practice.
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
          <h3>Overall Accuracy</h3>
          <strong>{accuracy}%</strong>
        </div>
      </section>

      <section className="m7-stats">
        <div className="m7-stat-card">
          <h3>Total Questions Attempted</h3>
          <strong>{totalQuestions}</strong>
        </div>

        <div className="m7-stat-card">
          <h3>Correct Answers</h3>
          <strong>{totalCorrect}</strong>
        </div>

        <div className="m7-stat-card">
          <h3>Incorrect Answers</h3>
          <strong>{totalQuestions - totalCorrect}</strong>
        </div>
      </section>

      <div className="m7-content-grid">
        <section className="m7-panel">
          <h2>Assessment History</h2>

          {history.length === 0 ? (
            <p>No assessments completed yet. Start practising!</p>
          ) : (
            history.map((item, index) => (
              <div className="m7-history-item" key={item.id || index}>
                <div>
                  <strong>{item.subject} Assessment</strong>
                  <p>
                    {item.difficulty} · {item.totalQuestions} questions
                  </p>
                  <p>
                    Correct: {item.correctAnswers} / {item.totalQuestions}
                  </p>
                  <p>
                    {item.date
                      ? new Date(item.date).toLocaleString()
                      : "Date unavailable"}
                  </p>
                </div>

                <strong>{item.percentage}%</strong>
              </div>
            ))
          )}
        </section>

        <section className="m7-panel">
          <h2>Revision Recommendations</h2>

          {revisionTopics.length === 0 ? (
            <div className="m7-recommendation">
              {history.length
                ? "Great work! No incorrect answers recorded. Keep practising!"
                : "Complete an assessment to receive revision recommendations."}
            </div>
          ) : (
            <>
              <p>Focus on revising these topics:</p>

              {revisionTopics.map(([topic, count]) => (
                <div className="m7-recommendation" key={topic}>
                  <strong>{topic}</strong>
                  <p>Incorrect answers: {count}</p>
                </div>
              ))}
            </>
          )}
        </section>
      </div>
    </div>
  );
}