import React from 'react';
import "./home.scss"
// import { useState } from 'react';
import Toggle from '../../compnents/toggle/Toggle';

const Home = () => {
    return (
        <div className='Home'>
            <h1>Home page</h1>
       
            <Toggle/>
        </div>
    );
};

export default Home;