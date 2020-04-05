const md = require("markdown-it")();

// Details about the plan
const name = "My First 5k";
const activitiesPerWeek = 3;
const perfectFor = "First Timers";

const activities = [
  { time: 1, description: "Lorem Ipsum" },
  { time: 2, description: "Lorem Ipsum" },
  { time: 3, description: "Lorem Ipsum" },
  { time: 4, description: "Lorem Ipsum" },
  { time: 5, description: "Lorem Ipsum" },
  { time: 6, description: "Lorem Ipsum" },
  { time: 7, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
  { time: 8, description: "Lorem Ipsum" },
];

const weeklyNotes = [
  { title: "Week 1", description: "" },
  { title: "Week 2", description: "" },
  { title: "Week 3", description: "" },
  { title: "Week 4", description: "" },
  { title: "Week 5", description: "" },
];

const planLength = activities.length / activitiesPerWeek;

const description = md.render(`
  Our ${name} program is designed for runners looking to complete their first ever 5k. We assume no prior experience and have taken the time to hand craft the perfect plan for those of us wanting to run our first 3.1 miles.
  
  We won't lie: our plan does span a little more time than some other beginner 5k plans, but we don't do that no reason. We want you to get across the finish line healthy. Take it from us, there's nothing less fun that spending time training for a race only to have to cancel it last minute.

  Our plan should take about ${Math.ceil(planLength)} weeks to complete.
`);

module.exports = {
  name,
  description,
  activitiesPerWeek,
  activities,
  weeklyNotes,
  perfectFor,
};
