const _ = require("lodash");

const createArrayOfPlanWeeks = plans => {
  return _.flatMap(plans, plan => {
    const { activitiesPerWeek, activities } = plan;
    return _.chunk(activities, activitiesPerWeek).map(
      (activityChunk, index) => {
        return {
          week: index + 1,
          name: plan.name,
          notes: plan.weeklyNotes[index],
          activities: activityChunk
        };
      }
    );
  });
};

module.exports = () => {
  return {
    plansPerWeek: data => {
      console.log({ data });
    },
    pagination: {
      data: "plans",
      size: 1,
      before: plans => createArrayOfPlanWeeks(plans),
      alias: "plan"
    },
    permalink: `plans/{{ plan.name | slug }}/week-{{ plan.week }}/index.html`
  };
};
