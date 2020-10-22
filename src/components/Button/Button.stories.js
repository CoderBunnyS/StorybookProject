import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

function helloWorld(){
    alert("Button Component Executed props.onClick")
}
storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Primary"
        onClick={helloWorld}
        type="primary"
    />)
    .add('Large Primary', () => <Button
        label="Large Primary Button"
        type="primary"
        large
    />)

    .add('Danger', () => <Button
    type="danger" 
    label="Danger" />)
    .add("Large Danger", () => <Button
    label="Large Danger Button"
    type="danger"
    large
    />)
    .add('Success', () => <Button
    type="success" 
    label="Success" />)
    .add("Outline Success", () => <Button
    label="Outline Success Button"
    type="success" outline/>)
    .add('Warning', () => <Button
    type="warning" 
    label="Warning" />)