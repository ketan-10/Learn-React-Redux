import React, { useEffect, useState } from 'react'
import {useAppSelector, useAppDispatch} from './app/hooks';
import { incremented } from './features/counter/counter-slice'
import logo from './logo.svg'
import './App.css'
import { useGetPokemonByNameQuery } from './features/pokemon/pokemon-api-slice';

function App() {
  
  const count = useAppSelector((state) => state.counter.value);
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  

  useEffect(() => {
    console.log(data);
    console.log(error);
    console.log(isLoading);
  })

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
