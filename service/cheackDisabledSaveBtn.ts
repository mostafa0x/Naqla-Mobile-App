export default function cheackDisabledSaveBtn(m: string, s: string) {
  const dis = m.length <= 0 && s.length <= 0;

  return dis;
}
