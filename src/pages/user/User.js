import React from 'react';
import { useParams } from 'react-router-dom';
import "./user.scss"

const User = () => {

    const params = useParams();
    console.log(params)
    return (
        <div className='User'>
            <p>{params.id}</p>
        </div>
    );
};

export default User;