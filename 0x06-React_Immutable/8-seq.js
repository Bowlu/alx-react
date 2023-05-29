import { Seq } from 'immutable';

export const printBestStudents = ({grades}) => {
  const seq = Seq(grades);
  const students = seq.filter((student) => student.score > 70);
  const anotherStudent = students.toJs();
  const nameFormat = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  
  object.keys(anotherStudent).map((item) => {
    anotherStudent[item].firstName = nameFormat(anotherStudent[item].firstName);
    anotherStudent[item].lastName = nameFormat(anotherStudent[item].lastName);
    return anotherStudent[item];
  });
  console.log(anotherStudent);
};