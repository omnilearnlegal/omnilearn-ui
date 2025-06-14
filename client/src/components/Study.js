import React, { useState } from 'react';

const sampleQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "22"],
    answer: "4"
  }
];

export default function Study() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (option) => {
    if (!submitted) {
      if (option === sampleQuestions[current].answer) {
        setScore(score + 1);
      }
      setSubmitted(true);
    }
  };

  const nextQuestion = () => {
    setCurrent(current + 1);
    setSubmitted(false);
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setSubmitted(false);
  };

  if (current >= sampleQuestions.length) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>✅ Quiz Complete</h2>
        <p>Your Score: {score} / {sampleQuestions.length}</p>
        <button onClick={reset}>Try Again</button>
      </div>
    );
  }

  const q = sampleQuestions[current];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Study Quiz</h2>
      <p><strong>Q{current + 1}:</strong> {q.question}</p>
      {q.options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(opt)}
          disabled={submitted}
          style={{ display: 'block', marginTop: '0.5rem' }}
        >
          {opt}
        </button>
      ))}
      {submitted && (
        <div style={{ marginTop: '1rem' }}>
          {q.options.includes(q.answer) && (
            <p>
              {q.answer === q.options[current] ? "✅ Correct!" : `❌ Wrong. Correct answer: ${q.answer}`}
            </p>
          )}
          <button onClick={nextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
}


