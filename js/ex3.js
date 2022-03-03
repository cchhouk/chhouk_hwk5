// Ex 3
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

const cLastNameResults = studentList.filter(list => list.lastName.startsWith("C")).map(list => { // Filter to start with C
  return {
    FirstName: list.firstName, // FN
    lastName: list.lastName, // LN 
    minScore: Math.min(...list.scores), // Min for filtered scores
    maxScore: Math.max(...list.scores), // Max for filtered scores
    avgGrade: list.scores.reduce((sum, grade) => sum + grade, 0)/list.scores.length // Avg for filtered scores
  };
});

console.log(cLastNameResults);

