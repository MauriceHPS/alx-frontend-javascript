interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): String;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

  d = new Director();
}

class Teacher implements TeacherInterface {
  workFromHome(): String {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }

  t = new Teacher();
}

function createEmployee(salary: string | number) {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else {
    return new Director();
  }
}

function isDirector(employee: string) {}

function executeWork(employee: string) {
  if (employee === "Director") return new Director().workDirectorTasks();

  if (employee === "Teacher") return new Teacher().workTeacherTasks();
}

console.log(createEmployee(500));

console.log(createEmployee(700));

console.log(createEmployee(100));
