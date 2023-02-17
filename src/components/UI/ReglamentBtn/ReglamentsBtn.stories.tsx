import { ReglamentBtn } from './ReglamentBtn';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

const mainButton: ComponentMeta<typeof ReglamentBtn> = {
  title: 'main buttons',
  component: ReglamentBtn,
};

export default mainButton;

export const ReglamentsButton: ComponentStory<typeof ReglamentBtn> = () => (
  <ReglamentBtn reglamentName="Y000" />
);
