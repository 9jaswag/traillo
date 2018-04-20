import React from "react"
import PropTypes from "prop-types"

// TextInput.propTypes = {
//   icon: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   onBlur: PropTypes.func,
//   onFocus: PropTypes.func,
//   error: PropTypes.string
// };

export default ({ type, name, value, label, placeholder,
  onChange, helpId, helpText, required, error, onBlur, extraClass, onFocus }) => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={'form-control form-control-lg ' + extraClass}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete="off"
        required={required}
      />
      <small id={helpId} className="form-text text-muted">{helpText}</small>
      <small id={helpId} className="form-text text-muted">{error}</small>
    </div>
  );
