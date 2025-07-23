import React from 'react';

const EmpleadoAvatar = ({pic, fullName}) => {
    return (
        <img
        src={pic}
        alt={fullName}>
        </img>
    );
};

export default EmpleadoAvatar;