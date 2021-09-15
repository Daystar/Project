import React, {useContext , useEffect} from 'react'
import './App.css';
import {StateContext} from './context'
import Navbar from './components/Navbar.js';
import Games from './components/Games.js';
import Cards from './components/Cards.js';
import Header from './components/Header';
import photos from './components/images/game1.jpg'
import photos2 from './components/images/game2.jpg'
import photos3 from './components/images/game3.jpg'
import photos4 from './components/images/game4.jpg'
import photos5 from './components/images/game5.jpg'
import photos6 from './components/images/game6.jpg'
import photos7 from './components/images/game7.jpg'
import photos8 from './components/images/game8.jpg'
import photos9 from './components/images/game9.jpg'
import photos10 from './components/images/game10.jpg'
import { motion } from 'framer-motion'
import { animationOne,transitionOne } from '../src/Animations'
import axios from 'axios'


function App() {

const fetchData = () => {
return axios.get("/IPlayerService/GetOwnedGames/v0001/?key=440918E5D72ACC396831CAF2622A9B60&steamid=76561198284198515&format=json")
    
      .then((response) => console.log(response.data));}

      useEffect(() => {
  fetchData();
  }, []);


  const {state,dispatch}= useContext(StateContext);






  const games = [
    {
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
  }
  ,{
    url: photos2,
    title: 'The Last of us part 2',
    timePlayed: '8h 15m',
    progress: '32%',
    production:'Sony Interactive Entertainment',
    diamond:'0',
    gold:'0',
    silver:'3',
    bronze:'5',
    size:'100 GB',
    lastTropy: 'Survival Expert',
    lastTropyInfo:'Learn all player upgrades'
  },{
    url: photos3,
    title: 'Death Stranding',
    timePlayed: '15h 05m',
    progress: '47%',
    production:'Kojima Productions',
    diamond:'13',
    gold:'5',
    silver:'7',
    bronze:'7',
    size:'55 GB',
    lastTropy: 'Good Samaritan',
    lastTropyInfo:'Deliver your first piece of lost cargo.'
  },{
    url: photos4,
    title: 'Red Dead Redemption II',
    timePlayed: '32h 10m',
    progress: '51%',
    production:'Rockstar Games',
    diamond:'5',
    gold:'5',
    silver:'7',
    bronze:'8',
    size:'105 GB',
    lastTropy: 'Butchered',
    lastTropyInfo:'Sell 20 items to the Butcher.'
  },{
    url: photos5,
    title: 'Grand Theft Auto V',
    timePlayed: '80h 36m',
    progress: '82%',
    production:'Rockstar Games',
    diamond:'3',
    gold:'15',
    silver:'21',
    bronze:'25',
    size:'76 GB',
    lastTropy: 'Pimp My Sidearm',
    lastTropyInfo:' Fully mod a weapon'
  },{
    url: photos6,
    title: 'WasteLand 3',
    timePlayed: '1h 54m',
    progress: '3%',
    production:'Deep Silver',
    diamond:'15',
    gold:'5',
    silver:'7',
    bronze:'7',
    size:'45 GB',
    lastTropy: 'The New Law',
    lastTropyInfo:'You established a new Ranger HQ in Colorado.'
  },{
    url: photos7,
    title: 'Ghost Of Tsushima',
    timePlayed: '8h 11m',
    progress: '64%',
    production:'Sony Interactive Entertainment',
    diamond:'15',
    gold:'5',
    silver:'13',
    bronze:'7',
    size:'39.86 GB',
    lastTropy: 'The Exiled Alliance',
    lastTropyInfo:'Reunite with your allies in the frozen north.'
  },{
    url: photos8,
    title: 'Sekiro Shadows Die Twice',
    timePlayed: '44h 56m',
    progress: '56%',
    production:'Activision',
    diamond:'1',
    gold:'4',
    silver:'5',
    bronze:'10',
    size:'17 GB',
    lastTropy: 'Dragon \'s Homecoming',
    lastTropyInfo:'Attained the "Return" ending'
  },{
    url: photos9,
    title: 'HellBlade',
    timePlayed: '5h 55m',
    progress: '10%',
    production:'Ninja Theory',
    diamond:'0',
    gold:'0',
    silver:'1',
    bronze:'4',
    size:'14.21 GB',
    lastTropy: 'Stories From the North',
    lastTropyInfo:'Collect all of the Lorestones'
  },{
    url: photos10,
    title: 'NBA 2k20',
    timePlayed: '13h 18m',
    progress: '33%',
    production:'Visual Concepts',
    diamond:'2',
    gold:'3',
    silver:'3',
    bronze:'4',
    size:'48.63 GB',
    lastTropy: 'The Candlestick Maker',
    lastTropyInfo:'Score 50 points in a MyCAREER game'
  }]





  return (

    <motion.div  initial='out' animate='in' exit='out' variants={animationOne} transition={transitionOne} 
      className="flex flex-col h-screen overflow-hidden transition-all duration-700 ease-in-out main_bg" style={{ 
      backgroundImage: `url(${state.currentGame.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      
    }}>

      <Header/>
  
      <Navbar />

      <div  className="relative inline-block whitespace-nowrap overflow-x-auto md:no-scrollbar w-full"
         >
        {
          games.map((game,index) => {

          //  return <Cards   game={game} />
           return <Cards state={state} dispatch={dispatch}  game={game} key={index} />

          })
        }

      </div>
      <Games state={state} />

     </motion.div>
    
  );
}

export default App;
