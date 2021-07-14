/// <reference path="Teacher.ts" />
// decleration mergin below allows us to merge interfaces with the same name
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return `Here is the list of requirements for Cpp`;
    }

    getAvailableTeacher(): string {
      return (this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher');
    }
  }
}