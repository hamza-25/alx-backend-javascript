export default function getStudentsByLocation(listArrayObject, city) {
  if (!Array.isArray(listArrayObject)) return [];
  return listArrayObject.filter((item) => item.location === city);
}
