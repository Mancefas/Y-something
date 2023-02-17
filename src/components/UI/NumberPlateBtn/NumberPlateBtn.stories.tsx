import NumberPlateBtn from './';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

const numberPlate: ComponentMeta<typeof NumberPlateBtn> = {
  title: 'main buttons',
  component: NumberPlateBtn,
};

export default numberPlate;

export const numberPlateButton: ComponentStory<typeof NumberPlateBtn> = () => (
  <NumberPlateBtn shortNr="ABC:300" />
);
