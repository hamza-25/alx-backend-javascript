export default function getStudentIdsSum(listArrayObject) {
  if (!Array.isArray(listArrayObject)) return [];
  return listArrayObject.reduce((total, item) => total + Number(item.id), 0);
}
