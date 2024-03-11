export default function hasValuesFromArray(setArray, array) {
  const res = array.map((element) => (!!setArray.has(element)));
  let toBeReturn = true;
  for (const elem of res) toBeReturn = !!elem;
  return toBeReturn;
}
