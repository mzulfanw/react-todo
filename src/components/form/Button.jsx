import React from 'react'
import PropTypes from 'prop-types'

function Button({
    label,
    name,
    size,
    ...others
}) {
    return (
        <button
            name={name}
            className='btn-danger'
            {...others}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number
}

export default Button