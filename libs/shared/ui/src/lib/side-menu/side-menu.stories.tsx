import { Story, Meta } from '@storybook/react';
import { SideMenu, SideMenuProps } from './side-menu';

export default {
  component: SideMenu,
  title: 'SideMenu',
} as Meta;

const Template: Story<SideMenuProps> = (args) => <SideMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
