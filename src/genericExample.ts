function getProperty<ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
): ObjectType[KeyType] {
  console.log("Getting property:", key);
  return obj[key];
}

let student = {
  name: "John",
  age: 21,
  major: "Computer Science",
};
console.log("Student object:", student);
let studentName = getProperty(student, "name");

console.log(studentName);
// //////////////////////////////////////////////////////////////

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let strings = ["1", "2", "3", "4", "5"];

const resultFunction = firstElement(strings);

console.log(resultFunction);
// //////////////////////////////////////////////////////////////

function mergeObj<A, B>(objA: A, objB: B): A & B {
  return Object.assign({}, objA, objB);
}

const merged = mergeObj({ name: "Serhii" }, { age: 24 });

console.log(merged);
// //////////////////////////////////////////////////////////////
