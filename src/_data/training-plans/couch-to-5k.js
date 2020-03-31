const name = "My First 5k";
const activitiesPerWeek = 3;
const activities = [
  { time: 1, description: "Lorem Ipsum" },
  { time: 2, description: "Lorem Ipsum" },
  { time: 3, description: "Lorem Ipsum" },
  { time: 4, description: "Lorem Ipsum" },
  { time: 5, description: "Lorem Ipsum" },
  { time: 6, description: "Lorem Ipsum" },
  { time: 7, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" }
];

const weeklyNotes = [
  { title: "Week 1", description: "" },
  { title: "Week 2", description: "" },
  { title: "Week 3", description: "" },
  { title: "Week 4", description: "" },
  { title: "Week 5", description: "" }
];

const description = `<p>C25K is a fantastic program that's been designed to get just about anyone from the couch to running 5 kilometers or 30 minutes in just 9 weeks.</p>`;

module.exports = {
  name,
  description,
  activitiesPerWeek,
  activities,
  weeklyNotes
};
