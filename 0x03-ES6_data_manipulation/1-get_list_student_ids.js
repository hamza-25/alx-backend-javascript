export default function getListStudentIds(listArrayObject) {
  if (!Array.isArray(listArrayObject)) {
    return [];
  }
  return listArrayObject.map((item) => item.id);
}
