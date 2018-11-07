import React from 'react'

export default ({ title, placeholder, name, type = "text", onChange }) => (
    <div className="form-group">
        <label htmlFor={name}>{title}</label>
        <input
            id={name}
            name={name}
            type={type}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
)