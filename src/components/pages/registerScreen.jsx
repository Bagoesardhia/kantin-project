import React from 'react'

// 
import Navbar from "../utilities/navbar";
import RegisterForm from '../utilities/registerForm'

export default function registerScreen (){
    return(
        <div className='registerScreen'>
            <div className='navbar'>
                <RegisterForm/>
            </div>
        </div>
    )
}