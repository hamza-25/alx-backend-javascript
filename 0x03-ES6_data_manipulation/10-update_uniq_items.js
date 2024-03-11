export default function updateUniqueItems(map) {
  map.forEach((element, index) => {
    if (Number(element) === 1) {
      map.set(index, 100);
    }
  });
  return map;
}
