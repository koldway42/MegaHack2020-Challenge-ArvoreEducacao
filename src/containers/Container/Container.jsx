import React from 'react';

import "./Container.scss"

export default (props) => {
    return (
        <div className={`Container Teste ${props.className}`}>
            {props.children}
        </div>
    )
}