module.exports = class Activity {
  constructor(args) {
    this._workout = args.workout;
    this._time = args.time;

    this._warmupTime = args.warmupTime;
    this._warmupSpeed = args.warmupSpeed || "walking";

    this._cooldownTime = args.cooldownTime;
    this._cooldownSpeed = args.cooldownSpeed || "walking";
  }

  createObject() {
    return {
      time: this._time,
      description: this._renderDescription(),
    };
  }

  _renderDescription() {
    return `<p>${this._warmupTime} minutes ${this._warmupSpeed} warmup</p><p>${this._workout}</p><p>${this._cooldownTime} minutes ${this._cooldownSpeed} cooldown</p>`;
  }
};
