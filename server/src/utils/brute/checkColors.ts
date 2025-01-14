import { adjustColor, colors } from '@labrute/core';
import { Gender, Prisma } from '@labrute/prisma';

const checkColors = (gender: Gender, inputs: Prisma.BruteColorsCreateWithoutBruteInput) => {
  if (!colors[gender].clothing.includes(inputs.accentColor)
    || adjustColor(inputs.accentColor, -20) !== inputs.accentShade
    || !colors[gender].clothing.includes(inputs.primaryColor)
    || adjustColor(inputs.primaryColor, -20) !== inputs.primaryShade
    || !colors[gender].clothing.includes(inputs.secondaryColor)
    || adjustColor(inputs.secondaryColor, -20) !== inputs.secondaryShade
    || !colors[gender].hair.includes(inputs.hairColor)
    || adjustColor(inputs.hairColor, -20) !== inputs.hairShade
    || !colors[gender].skin.includes(inputs.skinColor)
    || adjustColor(inputs.skinColor, -20) !== inputs.skinShade
  ) {
    throw new Error('I sense a disturbance in the force.');
  }
};

export default checkColors;