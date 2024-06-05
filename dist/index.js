import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
// function getProperty<ObjectType, KeyType extends keyof ObjectType>(
//   obj: ObjectType,
//   key: KeyType
// ): ObjectType[KeyType] {
//   console.log("Getting property:", key);
//   return obj[key];
// }
// let student = {
//   name: "John",
//   age: 21,
//   major: "Computer Science",
// };
// console.log("Student object:", student);
// let studentName = getProperty(student, "name");
// console.log(studentName);
//# sourceMappingURL=index.js.map