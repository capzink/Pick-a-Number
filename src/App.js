import React, {useState} from 'react'
import './App.css';


function App() {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) * 1);
  //states
  const [random, setRandom] = useState(0);
  const [value, setValue] = useState(null);
  const [tries, setTries] = useState(0);
  const [games, setGames] = useState(0);
  const [isActive, setActive] = useState("false");

  //functions

  const startGame = () => {
    setRandom(randomNumber);
    setActive(!isActive);
  };

  const userGuess = (e) => {
    setValue(e.target.value);
  };
  const compareNumbers = (e) => {
    e.preventDefault();
    if (!value || value > 10) window.confirm("Please pick a number between 1-10");
    if (random !== Number(value)) {
      window.confirm("Vuelve a intentar");
      setTries(tries + 1);
    } else {
      window.confirm("Number is Correct you win!");
      setTries(tries + 1);
      setGames(games + 1);
      setRandom(randomNumber);
    }
    setValue('')
  };
  const resetGame = () => {
    setRandom(randomNumber);
    setTries(0);
    setGames(0);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="gametitle">Guess a Number Game</h1>
        <div className={isActive ? "gamer" : null}>
          <section className="gamescore">
            <h2>Tries: {tries}</h2>
            <h2>Games: {games}</h2>
          </section>
          <form className="form" onSubmit={compareNumbers} action="">
            <label> Guess a Number from 1-10 hit Enter</label>
            <input onChange={userGuess} type="number" value={value} />
          </form>
          <button className="btn-reset" onClick={resetGame}>
            Reset Game
          </button>
        </div>
        <button
          className={!isActive ? "btn gamer " : 'btn'} 
          onClick={() => startGame()}
        >
          Lets Play
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
