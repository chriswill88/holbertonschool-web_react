/// <reference path="Teacher.ts" />
// decleration mergin below allows us to merge interfaces with the same name
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return `Here is the list of requirements for Java`;
    }

    getAvailableTeacher(): string {
      return (this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher');
    }
  }
}