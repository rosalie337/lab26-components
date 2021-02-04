import React from 'react';
import TitleType from '../title/TitleType';
import Welcome from '../greeting/Welcome';
import AllCharacters from '../characters/AllCharacters';
import Button from './button';

export default function App() {
  return (
    <>
      <AllCharacters />
      <TitleType />
      <Button onClick={() => console.log('you clicked!')} />
      <Welcome excited />

    </>
  );
}
