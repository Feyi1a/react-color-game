// components/MyScores.jsx
// This tracks and displays the user's correct guesses.

export function MyScores({ score, highScore, attempts, maxAttempts }) {
  return (
    <div className="score" data-testid="score">
      <p>Your Score: {score}</p>
      <p>High Score: {highScore}</p>
      <p>Attempts: {attempts} / {maxAttempts}</p>
    </div>

  );
}