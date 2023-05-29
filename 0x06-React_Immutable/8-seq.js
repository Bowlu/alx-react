import { Seq } from "immutable";

const printBestStudents = (obj) =>  {
  const seq = Seq(obj);

  const students = seq.filter((student) => student.score > 70);
  const anotherStudent = students.toJs();
  const nameFormat = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  Object.keys(anotherStudent).map((item) => {
    anotherStudent[item].firstName = nameFormat(anotherStudent[item].firstName);
    anotherStudent[item].lastName = nameFormat(anotherStudent[item].lastName);
    return anotherStudent[item];
  });
  console.log(anotherStudent);
};
export default printBestStudents;