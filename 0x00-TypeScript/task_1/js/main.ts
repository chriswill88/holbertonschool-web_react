export interface Teacher {
    readonly firstName: String;
    readonly lastName: String;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: Number;
    location: String;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: Number;
}

export interface printTeacherFunction {
    (firstName: String, lastName: String): String;
};

const printTeacher: printTeacherFunction = function (firstName: String, lastName: String) {
    return `${firstName[0]}. ${lastName}`;
}

export interface Student {
    firstName: String;
    lastName: String;
}

export class StudentClass {
    firstName: String;
    lastName: String;

    constructor(firstName: String, lastName: String) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

