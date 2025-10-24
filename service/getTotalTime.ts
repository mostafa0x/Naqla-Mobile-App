export default function getTotalTime(m: string, s: string) {
  if (m.length <= 0 && s.length <= 0) return 0;

  const numM = parseInt(m);
  const numS = parseInt(s);
  const finalM = isNaN(numM) ? 0 : numM;

  const finalS = isNaN(numS) ? 0 : numS;
  return finalM * 60 + finalS;
}
