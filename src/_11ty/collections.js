const _ = require("lodash");
const plans = require("../_data/plans");

const plansPerWeek = () => {
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

module.exports = { plansPerWeek };
