import React from 'react';

const SingleProcess = ({ process }) => {
    const { icon, number, title } = process;

    return (
        <>
            <div className="item">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="point">
                    <span>{number}</span>
                </div>
                <h4>{title}</h4>
            </div>
        </>
    );
};

export default SingleProcess;