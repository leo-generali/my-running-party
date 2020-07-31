const md = require("markdown-it")();
const Activity = require("../../_models/activity");

// Details about the plan
const name = "My First 5k";
const activitiesPerWeek = 3;
const perfectFor = "First Timers";

// Done
const weekOne = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

// Done
const weekTwo = [
  new Activity({
    workout: `6 x (jog 2 minute / walk 2 minutes)`,
    time: 24,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 2 minute / walk 2 minutes)`,
    time: 24,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

// Done
const weekThree = [
  new Activity({
    workout: `6 x (jog 2 minute / walk 1 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 2 minute / walk 1 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 3 minutes / walk 1 minutes)`,
    time: 24,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekFour = [
  // Down Day
  new Activity({
    workout: `6 x (jog 1 minutes / walk 3 minutes)`,
    time: 24,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `5 minute jog, 5 minute walk, 5 minute jog`,
    time: 15,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `5 minute jog, 5 minute walk, 5 minute jog`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekFive = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekSix = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekSeven = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekEight = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekNine = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekTen = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekEleven = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const weekTwelve = [
  new Activity({
    workout: `6 x (jog 1 minute / walk 2 minutes)`,
    time: 18,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (jog 1.5 minutes / walk 2 minutes)`,
    time: 21,
    warmupTime: 5,
    cooldownTime: 5,
  }),
];

const activities = [
  ...weekOne,
  ...weekTwo,
  ...weekThree,
  ...weekFour,
  ...weekFive,
  ...weekSix,
  ...weekSeven,
  ...weekEight,
  ...weekNine,
  ...weekTen,
  ...weekEleven,
  ...weekTwelve,
];

const weeklyNotes = [
  { title: "Week 1", description: "" },
  { title: "Week 2", description: "" },
  { title: "Week 3", description: "" },
  { title: "Week 4", description: "" },
  { title: "Week 5", description: "" },
];

const planLength = activities.length / activitiesPerWeek;

const longDescription = md.render(`
  Our ${name} program is designed for runners looking to complete their first ever 5k. We assume no prior experience and have taken the time to hand craft the perfect plan for those of us wanting to run our first 3.1 miles.
  
  We won't lie: our plan does span a little more time than some other beginner 5k plans, but we don't do that no reason. We want you to get across the finish line healthy. Take it from us, there's nothing less fun that spending time training for a race only to have to cancel it last minute.

  Our plan should take about ${Math.ceil(planLength)} weeks to complete.
`);

const shortDescription = md.render(`
  The perfect plan for beginners. Assumes no previous running experience.
`);

module.exports = {
  name,
  description: {
    long: longDescription,
    short: shortDescription,
  },
  activitiesPerWeek,
  activities: activities.map((activity) => activity.createObject()),
  weeklyNotes,
  perfectFor,
};
