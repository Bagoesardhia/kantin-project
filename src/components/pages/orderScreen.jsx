import React from 'react'

import Navbar from "../utilities/navbar";
import CollateralForm from "../utilities/collateralForm";

export default function orderScreen () {
    return(
        <div className='orderScreen'>
            <div>
                <Navbar/>
            </div>
            <div className='mt-4'>
                <CollateralForm/>
            </div>
        </div>
    )
}