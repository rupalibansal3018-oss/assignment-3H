const outputSection = document.getElementById("output");

// 1. Create a student object with Name, Age, Course, and Marks
const student = {
  name: "Rupali Bansal",
  age: 18,
  course: "B.Tech Computer Science",
  marks: 89.5
};

// 2. Display all object values using dot notation in Console
console.log("--- Student Object Details (Dot Notation) ---");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Marks:", student.marks);

// 3. Display all object values using dot notation on Webpage
outputSection.innerHTML = `
  <h2>Student Profile</h2>
  <p><strong>Name:</strong> ${student.name}</p>
  <p><strong>Age:</strong> ${student.age}</p>
  <p><strong>Course:</strong> ${student.course}</p>
  <p><strong>Marks:</strong> ${student.marks}</p>
`;