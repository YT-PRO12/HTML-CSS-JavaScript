// JavaScript Fundamentals
const student = {
  name: "Yatharth",
  course: "B.Tech IT",
  interests: ["Data Science", "ML", "Full Stack"]
};

console.log(`Hello, ${student.name}!`);
console.log(`Learning: ${student.interests.join(", ")}`);

function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

console.log(calculateAverage([80, 92, 87, 95]));
