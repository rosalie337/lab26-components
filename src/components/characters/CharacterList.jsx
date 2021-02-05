import React from 'react';
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import Character from './Character';


const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Link to={`/details/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

  }))
};

export default CharacterList;
