const md = require("markdown-it")();
const Activity = require("../../_models/activity");

// Details about the plan
const name = "My First 5k";
const activitiesPerWeek = 3;
const perfectFor = "First Timers";

const activities = [
  // Week One
  new Activity({
    workout: `6 x (run 1 minutes + walk 4 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (run 1 minutes + walk 4 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (run 1 minutes + walk 4 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),

  // Week Two
  new Activity({
    workout: `6 x (run 2 minutes + walk 3 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (run 2 minutes + walk 3 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (run 2 minutes + walk 3 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),

  // Week Three
  new Activity({
    workout: `6 x (run 4 minutes + walk 1 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (run 4 minutes + walk 1 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
  new Activity({
    workout: `6 x (run 4 minutes + walk 1 minutes)`,
    time: 40,
    warmupTime: 5,
    cooldownTime: 5,
  }),
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
