
import React from 'react'
import { Link } from 'react-router-dom'
import {Avatar} from '@mui/material';
import './css/Allquestions.css';

function Allquestions() {
  return (
    <div className='all-questions'>
        <div className='all-questions-container'>
        <div className='all-questions-left'>
        <div className='all-options'>
        <div className='all-option'>
            <p>
                0
            </p>
            <span>
                Votes
            </span>

        </div>
        <div className='all-option'>
            <p>
                0
            </p>
            <span>
                Answers
            </span>

        </div>
        <div className='all-option'>
            
            <small>
                0 views
            </small>

        </div>
        </div>
        </div>
        <div className='question-answer'>
           <Link to='/question'>How to escape percentage character in msbuild script?</Link>
           <div style={{width:"90%"}}>
            <div>
            I'm trying to send_keys()` to a specific input box on a website and I get an error that says that the element is not interactable, as seen below (including code): def createEmails():
            </div>

           </div>
           <div style={{display:"flex"}}>
            <span className='question-tags'>
                react

            </span>
            <span className='question-tags'>
                
                     antd
            </span>
            <span className='question-tags'>
                 frontend

            </span>

           </div>
           <div className='author'>
            <small>Timestamp</small>
            <div className='author-details'>
                <Avatar/>
                          
                <p>
                    User Name
                </p>

            </div>

           </div>
        </div>
        </div>
    </div>
  )
}

export default Allquestions