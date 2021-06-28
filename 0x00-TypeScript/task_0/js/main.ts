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
const studentList: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

for (let i of studentList) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    for (let x of [i.firstName, i.location]) {
        let tdElement = document.createElement('td');
        tdElement.innerHTML = x;
        tr.appendChild(tdElement);
    }
}
