interface Teacher {
    firstName: String;
    lastName: String;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: Number;
    location: String;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: Number;
}

interface printTeacherFunction {
    (firstName: String, lastName: String): String;
};

const printTeacher: printTeacherFunction = function (firstName: String, lastName: String) {
    return `${firstName[0]}. ${lastName}`;
}

interface Student {
    firstName: String;
    lastName: String;
}

class StudentClass {
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

