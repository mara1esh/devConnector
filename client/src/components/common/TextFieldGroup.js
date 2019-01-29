 import React /*, { useState }*/ from 'react'
 import classnames from 'classnames';
 import PropTypes from 'prop-types'
 
 const TextFieldGroup = ({
     name,
     placeholder,
     value,
     label,
     error,
     info,
     type,
     onChange,
     onKeyPress,
     disabled
 }) => {
    /*let [CapsLock, setCaps] = useState(false)
    
    const KeyPress = e => {
        if(e.key === 'CapsLock'){
            if(CapsLock){
              setCaps(CapsLock = true)
              return
            }
            setCaps(CapsLock = false)
          }
    }  */
   return (
    <div className="form-group">
    <input type = {type} 
     className= {classnames("form-control form-control-lg", {
      'is-invalid': error //|| CapsLock,
  })}
    placeholder = {placeholder}
    name = {name}
    value = {value}
    onChange = {onChange}
    disabled = {disabled}
    //onKeyPress = { type === "password" && KeyPress} 
    />
    {info && (<small className="form-text text-muted">{info}</small>)}
    {error && (<div className="invalid-feedback">{error}</div>)}
    
  </div>
   )
 }

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
    type: 'text'
}
 
export default TextFieldGroup
//{CapsLock && (<div className="invalid-feedback">You pressed CapsLock</div>)}