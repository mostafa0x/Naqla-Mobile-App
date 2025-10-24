export default function handleCheckName(nameTxt: string) {
  return nameTxt.length >= 3 && nameTxt.length < 8 ? true : false;
}
