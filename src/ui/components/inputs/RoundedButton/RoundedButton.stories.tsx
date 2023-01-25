import React from "react";
import RoundedButton from "./RoundedButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "inputs/RoundedButton",
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => (
  <RoundedButton {...args}>Click</RoundedButton>
);

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
};

// export const MeuBotao = () => <RoundedButton>Click</RoundedButton>;

// export const MeuBotaoCor = () => (
//   <RoundedButton variant="contained">Click</RoundedButton>
// );
