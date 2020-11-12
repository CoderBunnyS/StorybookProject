import React from "react";
import "./Forms.css";
import Dropdown from "design-language-react/es/Dropdown";

const Button = (props) => {
  let classList = '';

  let types = ['primary', 'danger', 'success', 'warning', 'default', 'cart']
const Forms = (props) => {
  let classList = "p-textinput";
  let label = "";
  if (props.label !== undefined && props.label.trim !== "") {
    label = props.label;
  }
  let labelHtml = "";
  if (label !== undefined && label.trim() !== "") {
    labelHtml = <span>{label}</span>;
  }
  let placeholder = label;
  if (props.placeholder !== undefined && props.placeholder.trim() !== "") {
    placeholder = props.placeholder.trim();
  }
  if (props.size !== undefined && props.size.trim() !== "") {
    let size = props.size.trim().toLowerCase();
    classList += ` textinput-${size}`;
  }
  return (
    <div className={classList}>
      {labelHtml}
      <input className="textinput" type="text" placeholder={placeholder} />
    </div>
  );
};
export default Forms;




// import React from 'react';
// import "./Forms.css";

// const Form = (props) => {
//     let classList = '';

//     let options = ['primary', 'danger', 'success', 'warning', 'default', 'cart']

//     if (types.includes(props.type)) {
//         classList += ` form-${props.type}`
//     } 
//     if (props.outline) {
//         classList += ` form-${props.type}-outline`
//     }
//     if (props.large) {
//         classList += ` form-${props.type}-large` // Note the spacing here since we are adding to the string!
//     }
//     if (props.shaded) {
//         classList += ` form-${props.type}-shaded`
//     }
    
// //onClick is a function created in Button.stories - added as a prop
//     return (<form onChange={props.onChange}className={classList}>
//                  </form>  )}
//      {props.label}



//      //outside code    
//     //  let options = props.options.map(val => {
//     //     return <option>{val}</option>
//     // })
    
//     // const selectForm = props => {
//     //     let options = props.options.map(val => {
//     //         // return <option>{val}</option>
//     //     })
//     //     return <select value={props.value} className={classes.join(" ")}>
//     //         <option className="select-default">Select</option>
//     //         {options}
//     //     </select>
//     // } 

// export default Form; 






