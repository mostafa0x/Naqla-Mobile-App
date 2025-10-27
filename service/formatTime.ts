export function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const displayMinutes = minutes < 0 ? 0 : minutes.toString().padStart(2, "0");
  const displaySeconds =
    seconds < 0 ? 0 : seconds < 1 ? seconds.toFixed(1) : seconds.toFixed(0);
  return `${displayMinutes}:${displaySeconds.toString().padStart(2, "0")}`;
}
