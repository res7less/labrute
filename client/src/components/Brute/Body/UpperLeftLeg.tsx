import { BruteColors, Gender } from '@labrute/prisma';
import React from 'react';

interface UpperLeftLegProps {
  id: string;
  gender: Gender;
  colors: BruteColors;
  type: number;
}

const UpperLeftLeg = ({ id, gender, colors, type }: UpperLeftLegProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="45.0" transform="matrix(0.9684, -0.2329, 0.2329, 0.9684, 24.2873, 122.7982)" width="29.7" xlinkHref={`#${id}-upperLeftLeg`} />
            <defs>
              <g id={`${id}-upperLeftLeg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
                <use height="45.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#${id}-upperLeftLeg-sprite56`} />
              </g>
              <g id={`${id}-upperLeftLeg-sprite56`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
                <use height="45.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#${id}-upperLeftLeg-sprite57`} />
              </g>
              <g id={`${id}-upperLeftLeg-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
                {/* This next path is declared in UpperRightLeg and shared here */}
                <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#${id}-upperRightLeg-sprite37`} />
                <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#${id}-upperLeftLeg-sprite58`} />
                {/* This next path is declared in UpperRightLeg and shared here */}
                <use height="45.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#${id}-upperRightLeg-sprite59`} />
              </g>
              <g id={`${id}-upperLeftLeg-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
                <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#${id}-upperLeftLeg-shape11`} />
              </g>
              <g id={`${id}-upperLeftLeg-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
                <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill={colors.primaryShade} fillRule="evenodd" stroke="none" />
                <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill={colors.primaryColor} fillRule="evenodd" stroke="none" />
                <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
              </g>
            </defs>
          </>
        );
      default:
        return null;
    }
  }

  switch (type) {
    case 1:
      return (
        <>
          <use height="46.15" transform="matrix(0.9807, -0.0947, 0.0947, 0.9807, 20.7419, 125.588)" width="27.4" xlinkHref={`#${id}-upperLeftLeg`} />
          <defs>
            <g id={`${id}-upperLeftLeg`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.55, 2.85)">
              <use height="46.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.55, -2.85)" width="27.4" xlinkHref={`#${id}-upperLeftLeg-sprite56`} />
            </g>
            <g id={`${id}-upperLeftLeg-sprite56`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.45, 19.25)">
              <use height="46.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.45, -19.25)" width="27.4" xlinkHref={`#${id}-upperLeftLeg-sprite57`} />
            </g>
            <g id={`${id}-upperLeftLeg-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.45, 19.25)">
              {/* These next paths are declared in UpperRightLeg and shared here */}
              <use height="37.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.4, -18.65)" width="16.75" xlinkHref={`#${id}-upperRightLeg-sprite37`} />
              <use height="29.5" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, -18.95)" width="17.4" xlinkHref={`#${id}-upperRightLeg-sprite38`} />
              <use height="46.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.45, -19.25)" width="27.4" xlinkHref={`#${id}-upperRightLeg-sprite58`} />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default UpperLeftLeg;
