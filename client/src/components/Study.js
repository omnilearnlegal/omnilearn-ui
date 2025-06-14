import React, { useState } from 'react';

const sampleQuestions = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    choices: ['3', '4', '5', '22'],
    answer: '4'
  },
  {
    question: 'What is the boiling point of water?',
    choices: ['100°C', '0°C', '50°C', '212°C'],
    answer: '100°C'
  }
];

export default function Study() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (choice) => {
    if (choice === sampleQuestions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < sampleQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const percent = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div style={{ padding: '2rem' }}>
        <h2>✅ Quiz Complete</h2>
        <p>Your score: {score} / {sampleQuestions.length} ({percent}%)</p>
        <p>{percent >= 70 ? '🎉 You Passed!' : '❌ Try Again!'}</p>
      </div>
    );
  }

  const question = sampleQuestions[current];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Study Quiz</h2>
      <p><strong>Q{current + 1}:</strong> {question.question}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.choices.map((choice) => (
          <li key={choice}>
            <button onClick={() => handleAnswer(choice)} style={{ margin: '0.5rem 0' }}>
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

