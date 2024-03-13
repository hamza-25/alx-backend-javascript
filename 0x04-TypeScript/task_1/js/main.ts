interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee?: boolean;
    [key: string]: boolean | string | number;
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// console.log(director1);

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: false,
    contract: false,
};
// console.log(teacher3);

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

// console.log(printTeacher('jonh', 'mikel'))

interface printTeacherFunction {
    FullName: string;
}

const teacherName: printTeacherFunction = {
    FullName: printTeacher('jonh', 'mikel'),
};

// console.log(teacherName.FullName);

interface studentConstructor {
    firstName: string;
    lastName: string;
}

class StudentClass {
    firstName: string;
    lastName: string;
    constructor({firstName, lastName}: studentConstructor){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string{
        return 'Currently working';
    }
    displayName(): string{
        return this.firstName;
    }
}
