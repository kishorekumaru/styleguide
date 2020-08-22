import React from 'react';

import {
  Accordion
} from '@material/core';

export default {
  title: 'Material/Button',
  component: Accordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Accordion  />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Accordion',
};

