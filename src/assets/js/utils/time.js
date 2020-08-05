const METERS_PER_MILE = 1609;

export const convertSecondsPerMeter = (
  seconds,
  conversion = METERS_PER_MILE
) => {
  return seconds * conversion;
};
