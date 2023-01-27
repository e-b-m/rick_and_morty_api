import './App.css';
import CharacterContainer from './containers/CharacterContainer';

function App() {

  return (
  
    <div className="App">
      <img src={require("/Users/emmabayley-melendez/Documents/coursework/week_09/rickandmorty api/src/RICK AND MORTY.png")}></img>
      <CharacterContainer/>
    </div>
  );

}

export default App;
