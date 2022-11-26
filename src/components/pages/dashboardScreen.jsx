import React from 'react'

import Navbar from '../utilities/navbar'
import Find from '../utilities/find'
import Tabs from '../utilities/tabs'

export default function dashboardScreen() {
    return(
        <div className='dashboardScreen'>
            <Navbar/>
            <p1>Selamat Datang di Kantin Kreasi</p1>
            <Find/>
            <Tabs/>
        </div>
    )
}