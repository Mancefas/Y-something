import SearchInput from './';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

const storybookComponent: ComponentMeta<typeof SearchInput> = {
  title: 'UI',
  component: SearchInput,
};

export default storybookComponent;

export const Search: ComponentStory<typeof SearchInput> = () => <SearchInput />;
