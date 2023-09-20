import React from 'react'
import './css/index.css'
import Sidebar from './sidebar.js'
import Main from './Main.js'

function index() {
    return (
        <div className='stack-index'>
            <div className='stack-index-component'>
                <Sidebar/>
                <Main/>

            </div>

        </div>
    )
}

export default index