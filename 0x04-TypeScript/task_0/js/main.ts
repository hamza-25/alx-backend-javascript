interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};
const student1: Student = {
    firstName: 'hamza',
    lastName: 'ferc',
    age: 26,
    location: 'morocco',
};
const student2: Student = {
    firstName: 'yassin',
    lastName: 'merc',
    age: 22,
    location: 'spain',
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const tableBody = document.getElementById('studentTbody');
    tableBody.innerHTML = '';
    studentsList.forEach((student) => {
        const row = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdLocation = document.createElement('td');
        tdName.textContent = student.firstName;
        tdLocation.textContent = student.location;

        row.appendChild(tdName);
        row.appendChild(tdLocation);
        tableBody.appendChild(row);
    });
}
renderTable();