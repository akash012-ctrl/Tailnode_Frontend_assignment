import React from 'react';
import "./header.css";

const Header = ({settodos}) => {

    const resetAll = () => {
        settodos([]);
    }

    return (
        <div className = "header">
            <h2>TODO</h2>
            <div onClick = {resetAll} className = "reset">
                <i className="fa fa-refresh"></i>
                <div>Reset all</div>
            </div>
            
        </div>
    );
};

export default Header;