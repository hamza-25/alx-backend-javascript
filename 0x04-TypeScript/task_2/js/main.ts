interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director {
    constructor() {

    }

    workFromHome() {
        return 'Working from home';
    }

    getToWork() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher {
    constructor() {

    }
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): string {
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

function isDirector(employee: any): boolean {
    if (employee === 'Teacher') return false;
    return true;
}

function executeWork(employee: string){
    if (isDirector(employee)) {
        const phrase: string = new Director().workDirectorTasks();
        console.log(phrase);
    } else {
        const phrase: string = new Teacher().workTeacherTasks();
        console.log(phrase);
    }
}

// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string{
    if (todayClass === 'Math') return `Teaching ${todayClass}`;
    return `Teaching ${todayClass}`;
}

// console.log(teachClass('History'));
// console.log(teachClass('Math'));
