import React from 'react'
import './css/sidebar.css'
import {Public, Work , Stars } from '@mui/icons-material';
import {Link} from 'react-router-dom';


function sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-options'>
                    <div className='sidebar-option'>
                        <Link>Home

                        </Link>

                    </div>
                    <div className='sidebar-option'>
                        <Link>
                            Public
                        </Link>
                        <div className='link'>
                            <div className='link-tag'>
                                <Public/>
                                <Link>
                                    Questions
                                </Link>

                            </div>
                            <div className='tags'>
                                <p>
                                    Tags
                                </p>
                                <p>
                                    Users
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className='sidebar-option'>
                        <p>
                            Collectives
                        </p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Stars />
                                <Link>
                                    Explore Collectives
                                </Link>

                            </div>

                        </div>

                    </div>
                    <div className='sidebar-option'>
                        <p>
                            Find A Job
                        </p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Link>
                                    Jobs

                                </Link>
                                <Link>
                                    Companies

                                </Link>

                            </div>
                        </div>


                    </div>
                    <div className='sidebar-option'>
                        <p>
                            Teams
                        </p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Work/>
                                <Link>
                                    Companies

                                </Link>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default sidebar