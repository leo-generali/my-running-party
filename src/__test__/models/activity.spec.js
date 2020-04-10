const Activity = require("../../_models/activity");

const args = {
  workout: `Luke, I am your father`,
  time: 10,
  warmupTime: 10,
  cooldownTime: 10,
};

describe("Activity", () => {
  const activity = new Activity(args);

  describe("#constructor", () => {
    test("Should default to walking for cooldownSpeed", () => {
      expect(activity._cooldownSpeed).toEqual("walking");
    });

    test("Should default to walking for walkdownSpeed", () => {
      expect(activity._warmupSpeed).toEqual("walking");
    });
  });

  describe("#createObject", () => {
    test("returns an object with the workout description and the time", () => {
      const result = activity.createObject();
      expect(result).toEqual({
        time: 10,
        description: `<p>10 minutes walking warmup</p><p>Luke, I am your father</p><p>10 minutes walking cooldown</p>`,
      });
    });
  });
});
