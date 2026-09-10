const users = [
  { id: 1, name: "A", skills: ["JS", "React"], active: true },
  { id: 2, name: "B", skills: ["Python"], active: false },
  { id: 3, name: "C", skills: ["Java", "JS"], active: true }
];

const report = users
  .filter(user => user.active)
  .map(({ id, name, skills }) => ({
    id,
    name,
    skillCount: skills.length,
    hasJavaScript: skills.includes("JS")
  }));

console.table(report);
