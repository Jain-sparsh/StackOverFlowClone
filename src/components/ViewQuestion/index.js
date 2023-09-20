import React from 'react'
// import './css/index.css'
import Sidebar from '../StackOverflow/sidebar'


import MainQuestion from './MainQuestion'

function index() {
    return (
        <div className='stack-index'>
            <div className='stack-index-component'>
                <Sidebar/>
                <MainQuestion/>

            </div>

        </div>
    )
}

export default index