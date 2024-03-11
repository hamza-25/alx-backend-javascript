export default function updateStudentGradeByCity(listArrayObject, city, newGrades) {
  if (!Array.isArray(listArrayObject)) return [];
  const studentsFiltred = listArrayObject.filter((item) => item.location === city);
  return studentsFiltred.map((studentItem) => {
    const studentGrade = newGrades.find((item) => item.studentId === studentItem.id);
    const updatedStudent = { ...studentItem };
    if (studentGrade) {
      updatedStudent.grade = studentGrade.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });
}
