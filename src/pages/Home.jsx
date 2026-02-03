import { Link} from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <div id="home-container">
    <div id= "game-boy">
      <div id="screen">
        <h1>Welcome, trainer!</h1>
        <p>Explore the world of Pokémon!</p>
      </div>
      <div id="d-pad"></div>
      <div id="a-button"></div>
      <div id="b-button"></div>
      <div id="options-buttons">
          <div className ="btn-group">
        <Link to= "/pokedex" className="pill-btn"></Link>
        <span className="label">POKEDEX</span>
        </div>
        <div className ="btn-group">
        <Link to= "/about" className="pill-btn"></Link>
        <span className="label">ABOUT</span>
        </div>
       
      </div>

    </div>

    </div>
  )
}

export default Home;