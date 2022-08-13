import React from 'react'
import PropTypes from 'prop-types'

function Input({
    name,
    label,
    onChange = () => { },
    error,
    value,
    ...others
}) {
    return (
        <>
            <p>{label}</p>
            <input
                name={name}
                onChange={onChange}
                value={value}
                {...others}
                className='input'
            />
            {
                error && (
                    <p>{error}</p>
                )
            }
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func
}

export default Input