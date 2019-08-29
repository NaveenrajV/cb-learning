import React from 'react'

const ToggleButton  = (props) =>{
  const {isToggle} = props
  return (
    isToggle ? 
    <button type="submit" className = 'toggleOn'> Done </button>:
    <button type="submit" className = 'toggleOff'> Add </button>
  );
}
export default ToggleButton;
