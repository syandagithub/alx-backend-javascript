export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Siya",
  lastName: "MN",
  age: 2,
  location: "SA,  JHB",
};
const student: Student = {
  firstName: "Zama",
  lastName: "Shaba",
  age: 33,
  location: "SA, PMB",
};

const studentsList: Array<Student> = [
  student1,
  student,
];
