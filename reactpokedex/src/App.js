import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const[pokemon, setPokemon] = useState(null);

  useEffect(()=> {
  async function dadosPokemon(){
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
      setPokemon(response.data)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }
    dadosPokemon()
  },[]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <h2>{pokemon?.name}</h2>
      <img src={pokemon.sprites.front_default} alt='pokemon'/>
      <p>Abilities:</p>
      <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
      </ul>

    </div>
  );
}

export default App;
