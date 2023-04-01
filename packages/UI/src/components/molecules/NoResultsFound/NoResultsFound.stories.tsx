// write a boiler plate storybook story
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import NoResultsFound from './NoResultsFound';

export default {
  title: 'Molecules/NoResultsFound',
  component: NoResultsFound,
} as ComponentMeta<typeof NoResultsFound>;

const DefaultNoResultsFound: ComponentStory<typeof NoResultsFound> = (args) => (
  <NoResultsFound {...args}></NoResultsFound>
);

export const Default = DefaultNoResultsFound.bind({});

Default.args = {
  header: 'No Results Found',
  paragraph:
    'Try adjusting your search or filter to find what you are looking for.',
};
