import { Story, Meta } from '@storybook/react';
import { BasicLayout,  BasicLayoutProps } from './basic-layout';

export default {
  component: BasicLayout,
  title: 'BasicLayout',
} as Meta;

const Template: Story<BasicLayoutProps> = (args) => <BasicLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
