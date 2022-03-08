import React from "react";
import { Meta, Story } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "BRIBrain/Typography",
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      defaultValue: "Lorem ipsum dolor sit amet",
      description: "text",
    },
    variant: {
      options: [
        "header-base",
        "header-small",
        "subtitle-base",
        "subtitle-small",
        "body-base",
        "body-small",
        "caption-base",
      ],
      control: { type: "select" },
      description: "font variant",
    },
    weight: {
      options: ["regular", "medium", "semibold", "bold"],
      control: { type: "select" },
      defaultValue: "regular",
      description: "font weight",
    },
  },
} as Meta<typeof Typography>;

const text: string = "Lorem ipsum dolor sit amet";
const Template: Story<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "header-base",
  weight: "regular",
};

export const Heading2 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "header-small",
  weight: "regular",
};

export const Subtitle1 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "subtitle-base",
  weight: "regular",
};

export const Subtitle2 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "subtitle-small",
  weight: "regular",
};

export const Body1 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "body-base",
  weight: "regular",
};

export const Body2 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "body-small",
  weight: "regular",
};

export const Caption1 = Template.bind({});
Heading1.args = {
  text: text,
  variant: "caption-base",
  weight: "regular",
};
