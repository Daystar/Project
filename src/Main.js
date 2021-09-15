import React, {useReducer} from 'react'
import { BrowserRouter as Router,Route,Switch}   from 'react-router-dom';
import Statspage from './components/Statspage.js';
import App from './App';
import {AnimatePresence} from 'framer-motion'
import photos from './components/images/game1.jpg'
import {StateContext} from './context'



function reducer(state, action) {
    switch (action.type) {
      case 'game':
        return {currentGame: action.payload};
   
      default:
        return state;
    }
  }


  const initialState = {currentGame: {
   url: photos,
    title: 'Cyberpunk 2077',
    timePlayed: '20h 44m',
    progress: '77%',
    production:'CD Projekt',
    diamond:'15',
    gold:'5',
    silver:'7',
    bronze:'7',
    size:'70 GB',
    lastTropy: 'The Wandering Fool',
    lastTropyInfo:'Find all the tarot graffiti for the job Fool on the Hill'
  }};
  

export default function Main() {

  // let location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  

    


    return (
      <div className="overflow-hidden">
        <Router >
              
           
            
 <StateContext.Provider value={{state, dispatch}} >
            <AnimatePresence exitBeforeEnter >
            <Switch>  
            
                <Route path="/" exact component={App} /> 
                <Route className='overflow-hidden' path="/Statspage" exact component={Statspage} />
            </Switch>
            </AnimatePresence>

            </StateContext.Provider>
           
   
           
  
        </Router>
        </div>
    )
}
