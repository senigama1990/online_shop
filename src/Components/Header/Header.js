import React from 'react'
import Navigation from './Navigation'

function Header() {
    return (
        <div className='header'>
            <Navigation />
            <div className='header_content'>
                <h2 className='header_title'>Минималистические часы</h2>
                <p className='header_text'>маленькие детали, производящие впечатления</p>
            </div>
        </div>
    )
}

export default Header
