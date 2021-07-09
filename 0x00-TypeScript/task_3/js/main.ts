interface DirectorInterface {
    workFromHome(): String;
    getCoffeeBreak(): String;
    workDirectorTasks(): String;
}

interface TeacherInterface {
    workFromHome(): String;
    getCoffeeBreak(): String;
    workTeacherTasks(): String;
}

class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
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

function createEmployee(salary: String | Number) {
    if (salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Teacher | Director) {
    if (employee instanceof Teacher) {
        employee.workTeacherTasks();
    } else if (employee instanceof Director) {
        employee.workDirectorTasks();
    }
}

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}