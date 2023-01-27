import { angles } from './settings';

export const angleUp = (params) => {
  const newAngle = params.angle + params.step;
  return angles.max < newAngle ? angles.min : newAngle;
};
