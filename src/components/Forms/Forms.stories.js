import React from 'react';
import { storiesOf } from '@storybook/react';

import Forms from './Forms'



storiesOf('Forms', module)
.add('Regular Forms', () => <Forms 
placeholder={"Email"} type="email" />)
.add('Regular Forms 2', () => <Forms
placeholder="email" />)
.add('Regular Forms 3', () => <Forms
placeholder="email" />)
.add('Input Menu', () =>   {    
return (<DropdownButton>
<Dropdown.Item>Option1</Dropdown.Item>
<Dropdown.Item>Option2</Dropdown.Item>
<Dropdown.Item>Option3</Dropdown.Item>
</DropdownButton>)})