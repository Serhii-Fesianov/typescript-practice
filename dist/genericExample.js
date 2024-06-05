function getProperty(obj, key) {
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
//# sourceMappingURL=genericExample.js.map