/// <reference path="Teacher.ts" />
// above we have to refrence the file where the namespace was created
namespace Subjects {
  export class Subject {
    // implementing the interface for the class attribute
    teacher: Teacher;
  
    // setting the teacher attribute
    set teacherSet(teach: Teacher) {
      this.teacher = teach;
    }
  }
}