import React from 'react';

import Button from '@material-ui/core/Button';

import Theme from './../Theme'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => (
 <Theme>
   <Button> Bet Now </Button>
 </Theme>
)

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
  orientation: 'horizontal',
};
