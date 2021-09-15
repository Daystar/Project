import React from 'react'
import photos from './components/images/game1.jpg'


export const StateContext = React.createContext({currentGame: {
  url: photos,
  title: 'Cyberpunk 2077',
  timePlayed: '20h 44m',
  progress: '77%',
  production:'CD Projekt',
  size:'70 GB',
  lastTropy: 'The Wandering Fool'
  }});