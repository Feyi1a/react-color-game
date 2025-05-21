// components/GameStatus.jsx

export function GameStatus({ status, animate }) {
  return (
    <div
      className={`game-status ${animate ? 'fade' : ''}`}
      data-testid="gameStatus"
    >
      {status}
    </div>
  );
}
