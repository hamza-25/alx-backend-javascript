var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getToWork = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        // const teacher = new Teacher();
        return 'Teacher';
    }
    // const director = new Director();
    return 'Director';
}
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));
function isDirector(employee) {
    if (employee === 'Teacher')
        return false;
    return true;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        var phrase = new Director().workDirectorTasks();
        console.log(phrase);
    }
    else {
        var phrase = new Teacher().workTeacherTasks();
        console.log(phrase);
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math')
        return "Teaching ".concat(todayClass);
    return "Teaching ".concat(todayClass);
}
console.log(teachClass('History'));
teachClass('Math');
console.log(teachClass('Math'));
