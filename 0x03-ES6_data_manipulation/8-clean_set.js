export default function cleanSet(setArray, startString) {
  if (startString === '') return '';
  const array = Array.from(setArray);
  const startStringLenght = startString.length;
  const newArray = [];
  array.forEach((element) => {
    if (element.slice(0, startStringLenght) === startString) {
      const add = element.slice(startStringLenght, element.length);
      newArray.push(add);
    }
  });
  return newArray.join('-');
}
