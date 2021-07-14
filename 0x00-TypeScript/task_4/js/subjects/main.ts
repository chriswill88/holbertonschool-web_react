/// <reference path="Teacher.ts" />

export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;

export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
}

console.log('C++');
const c = new cpp();
c.teacherSet = cTeacher;
c.getAvailableTeacher()
c.getRequirements()

console.log('Java');
const j = new java();
j.teacherSet = cTeacher;
j.getAvailableTeacher()
j.getRequirements()

console.log('React');
const r = new react();
r.teacherSet = cTeacher;
r.getAvailableTeacher()
r.getRequirements()
