import React from 'react';
import PropTypes from "prop-types"

export function Button({children, type = 'primary', to, loading = false, ...props}) {
    let className = 'btn'
    let htmlType = null
    if (type === 'submit') {
        htmlType = 'submit'
    }
    return to ? <a href={to} className={className} type={htmlType} {...props}>
        {children}
    </a> : <button className={className} type={htmlType} {...props}>
        {children}
    </button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    loading: PropTypes.bool
}