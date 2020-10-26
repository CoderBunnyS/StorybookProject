import React from 'react';
import "./Forms.css";

const Form = (props) => {
    let classList = '';

    let types = ['primary', 'danger', 'success', 'warning', 'default', 'cart']

    if (types.includes(props.type)) {
        classList += ` form-${props.type}`
    } 
    if (props.outline) {
        classList += ` form-${props.type}-outline`
    }
    if (props.large) {
        classList += ` form-${props.type}-large` // Note the spacing here since we are adding to the string!
    }
    if (props.shaded) {
        classList += ` form-${props.type}-shaded`
    }
    
//onClick is a function created in Button.stories - added as a prop
    return <div><form onClick={props.onClick}className={classList}>
        {props.label}
    </form>
    <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
    </div>
    }

export default Form; 






