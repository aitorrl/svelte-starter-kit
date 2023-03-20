import NavBar from '../routes/components/navigation/NavBar.svelte';

export default {
  title: "Example/NavBar",
  component: NavBar,
  argTypes: {},
};

const Template = (args) => ({
  Component: NavBar,
  props: args,
});

export const Componente = Template.bind({});
Componente.args = {
};