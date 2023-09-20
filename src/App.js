import React, { useEffect } from 'react';
import Header from './components/Header/header.js';
import './App.css';
import {BrowserRouter as Router , Switch , Route , Redirect } from 'react-router-dom';
import Stackoverflow from './components/StackOverflow'
import Question from './components/Add-Question/Question.js'
import ViewQuestion from './components/ViewQuestion'
import Auth from './components/Auth';
import { selectUser } from './features/userSlice.js';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import auth from "./firebase"

function App() {
  const user=useSelector(selectUser)
  const dispatch =useDispatch()

  // useEffect(()=> {auth.onAuthStateChanged},[])

  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          
          <Route  path='/add-question' component={Question} />
          <Route  path='/question' component={ViewQuestion} />
          <Route exact path='/' component={Stackoverflow} />
          <Redirect to='/' />
          
          

        </Switch>
      </Router>
   
    
    
    </div>
  );
}

export default App;
