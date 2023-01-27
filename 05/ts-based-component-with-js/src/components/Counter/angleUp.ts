export const angleUp = (params: { angle: number; step: number }) => {
  const newAngle = params.angle + params.step;
  return 360 < newAngle ? 0 : newAngle;
};
