import React from 'react';
import { Link } from 'react-router-dom';
const Text = ({ para, paraTwo, to }) => {
    return (
        <>
            <p>{para} <Link to={to}>{paraTwo}</Link></p>
        </>
    )
}

export default Text