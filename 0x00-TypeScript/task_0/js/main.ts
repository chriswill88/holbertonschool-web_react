interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'bill',
    lastName: 'joel',
    age: 24,
    location: 'Netherlands',
}

const student2: Student = {
    firstName: 'Jeff',
    lastName: 'joel',
    age: 24,
    location: 'Netherlands',
}

const studentList: Student[] = [student1, student2]
for (let i of studentList) {
    console.log(i);
}
