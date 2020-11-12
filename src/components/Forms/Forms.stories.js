import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Forms";

storiesOf("Form", module)
  .add("TextInput small", () => (
    <Form label="Email" placeholder="Email" size="small" />
  ))
  .add("TextInput", () => <Form label="Email" placeholder="Email" />)
  .add("TextInput large", () => (
    <Form label="Email" placeholder="Email" size="large" />
  ));







// import React from 'react';
// import { storiesOf } from '@storybook/react';

// import Forms from './Forms'



// storiesOf('Forms', module)
// .add('Regular Forms', () => <Forms 
// placeholder={"Email"} type="email" />)
// .add('Regular Forms 2', () => <Forms
// placeholder="email" />)
// .add('Regular Forms 3', () => <Forms
// placeholder="email" />)



// // .add('Select Small', () => <Form type="select" options={options} />)
// // .add('Select Medium', () => <Form type="select" medium options={options} />)
// // .add('Select Large', () => <Form type="select" large options={options} />)
