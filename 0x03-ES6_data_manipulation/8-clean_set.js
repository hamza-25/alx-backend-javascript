export default function cleanSet(setArray, startString) {
  if (startString === undefined || startString.length === 0) return '';
  const startStringLenght = startString.length;
  const newArray = [];
  setArray.forEach((element) => {
    if (element.startsWith(startString) && element !== undefined) {
      const add = element.slice(startStringLenght);
      newArray.push(add);
    }
  });
  return newArray.join('-');
}
