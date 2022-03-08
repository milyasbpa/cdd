import React from "react";
import { Meta, Story } from "@storybook/react";

import Button from "./Button";

export default {
  title: "BRIBrain/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      defaultValue: "Lorem ipsum dolor sit amet",
      description: "text",
    },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
      description: "font variant",
    },
    size: {
      options: ["long", "medium1", "medium2", "small"],
      control: { type: "select" },
      defaultValue: "regular",
      description: "font weight",
    },
  },
} as Meta<typeof Button>;

const text: string = "Primary";
const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLongDefault = Template.bind({});
PrimaryLongDefault.args = {
  label: text,
  variant: "primary",
  size: "long",
};

export const PrimaryMedium1Default = Template.bind({});
PrimaryLongDefault.args = {
  label: text,
  variant: "primary",
  size: "medium1",
};

export const PrimaryMedium2Default = Template.bind({});
PrimaryLongDefault.args = {
  label: text,
  variant: "primary",
  size: "medium2",
};

export const PrimarySmallDefault = Template.bind({});
PrimaryLongDefault.args = {
  label: text,
  variant: "primary",
  size: "small",
};
