import React from 'react';
import "./Button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = '';

    let types = ['primary', 'danger', 'success', 'warning', 'default', 'cart', 'like']

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    } 
    if (props.outline) {
        classList += ` button-${props.type}-outline`
    }
    if (props.large) {
        classList += ` button-${props.type}-large` // Note the spacing here since we are adding to the string!
    }
    if (props.shaded) {
        classList += ` button-${props.type}-shaded`
    }
    if(props.heart){
        classList += ` button-${props.type}-shaded`
    }
    
//onClick is a function created in Button.stories - added as a prop
    return <button onClick={props.onClick}className={classList}>
        {props.label}
    </button>
    }

export default Button;  