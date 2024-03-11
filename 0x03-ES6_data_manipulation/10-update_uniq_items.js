export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((element, index) => {
      if (Number(element) === 1) {
        map.set(index, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}
