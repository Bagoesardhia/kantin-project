import React from 'react';

import Navbar from "../utilities/navbar";

export default function setupScreen () {
    return(
        <div className='setupScreen'>
            <div>
                <Navbar/>
            </div>
            <div className='w-80 mx-auto mt-5'>
                <h1> Under Maintenance</h1>
            </div>
        </div>
    )
}