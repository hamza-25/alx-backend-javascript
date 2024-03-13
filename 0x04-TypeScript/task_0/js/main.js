;
var student1 = {
    firstName: 'hamza',
    lastName: 'ferc',
    age: 26,
    location: 'morocco',
};
var student2 = {
    firstName: 'yassin',
    lastName: 'merc',
    age: 22,
    location: 'spain',
};
var studentsList = [student1, student2];
function renderTable() {
    var tableBody = document.getElementById('studentTbody');
    tableBody.innerHTML = '';
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdLocation = document.createElement('td');
        tdName.textContent = student.firstName;
        tdLocation.textContent = student.location;
        row.appendChild(tdName);
        row.appendChild(tdLocation);
        tableBody.appendChild(row);
    });
}
renderTable();
