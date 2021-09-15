import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ game, dispatch }) => {
  return (
    <div className=" inline-block  cursor-pointer  mr-6 h-80 w-72 py-8 ">
      <Link to="/statspage" className="statscard">
        <img
          onMouseOver={() => dispatch({ payload: game, type: 'game' })}
          className="object-cover h-full w-full  transform  rounded-xl hover:rounded-2xl hover:border-4 hover:border-blue-600 border-opacity-100 hover:scale-110 p-1.5 shadow-lg motion-reduce:transform-none transition duration-700 ease-in-out "
          src={game.url}
          alt="game1"
        />
      </Link>
    </div>
  );
};

export default Cards;
