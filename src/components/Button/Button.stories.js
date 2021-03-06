import React from 'react';
import { storiesOf } from '@storybook/react';
//import cartIcon from "mockups/cart_-1.svg";
import Button from './Button';

//const Icons = {cart: cartIcon}
//create function
function helloWorld(){
    alert("Button Component Executed props.onClick")
}
//'Button' is what the component is called on storybook, module is required to point to js
storiesOf('Button', module)
//chain other methods off stories of to add sotrybook component into this method
//first argument is the name of the story (Button component w/ different looks - called stories)
//this creates a button called primary in storybook when you run npm start storybook
//label is what it says on the actual button
//onClick refers back to function above
//type references array of different button types listed in button.js
    .add('Primary', () => <Button
        label="Do something"
        onClick={helloWorld}
        type="primary"
    />)
    .add('Large Primary', () => <Button
        label="Do something"
        type="primary"
        large
    />)

    .add('Danger', () => <Button
    type="danger" 
    label="Do something" />)
    .add("Danger Large", () => <Button
    label="Do something"
    type="danger"
    large
    />)
    .add('Success', () => <Button
    type="success" 
    label="Do something" />)
    .add("Outline Success", () => <Button
    label="Do something"
    type="success" outline/>)
    .add('Warning', () => <Button
    type="warning" 
    label="Do something" />)
    .add("Outline Primary", () => <Button
    label="Do something"
    type="primary" outline/>)
    .add("Shaded Primary", () => <Button
    label="Do something"
    type="primary" shaded/>)
    .add('Default', () => <Button
    type="default" 
    label="Do something" />)
    .add('Outline Default', () => <Button
    type="default" 
    label="Do something" outline />)
    .add("Shaded Danger", () => <Button
    label="Do something"
    type="danger" shaded/>)
    .add("Shaded Success", () => <Button
    label="Do something"
    type="success" shaded/>)
    .add("Shaded Warning", () => <Button
    label="Do something"
    type="warning" shaded/>)
    .add("Shaded Default", () => <Button
    label="Do something"
    type="default" shaded/>)
    .add("Outline Danger", () => <Button
    label="Do something"
    type="danger" outline/>)
    .add("Outline Warning", () => <Button
    label="Do something"
    type="warning" outline/>)
    .add("Outline Primary Large", () => <Button
    label="Do something"
    type="primary" outline large/>)
    .add("Shaded Primary Large", () => <Button
    label="Do something"
    type="primary" shaded large/>)
    .add("Shaded Danger Large", () => <Button
    label="Do something"
    type="danger" shaded large/>)
    .add("Outline Danger Large", () => <Button
    label="Do something"
    type="danger" outline large/>)
    .add("Success Large", () => <Button
    label="Do something"
    type="success" large/>)
    .add("Shaded Success Large", () => <Button
    label="Do something"
    type="success" shaded large/>)
    .add("Outline Success Large", () => <Button
    label="Do something"
    type="success" outline large/>)
    .add("Warning Large", () => <Button
    label="Do something"
    type="warning" large/>)
    .add("Shaded Warning Large", () => <Button
    label="Do something"
    type="warning" shaded large/>)
    .add("Outline Warning Large", () => <Button
    label="Do something"
    type="warning" outline large/>)
    .add('Default Large', () => <Button
    label="Do something"
    type="default" large />)
    .add('Shaded Default Large', () => <Button
    label="Do something"
    type="default" shaded large />)
    .add('Outline Default Large', () => <Button
    label="Do something"
    type="default" outline large />)
    

     




    