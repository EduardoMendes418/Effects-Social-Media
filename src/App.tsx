import './App.css';
import { FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Social Media
        </p>
      < ul>
      <li><a href="/"><i className="fa-brands"> <FaInstagram/></i></a></li>
      <li><a href="/"><i className="fa-brands"> <FaInstagram/></i></a></li>
      <li><a href="/"><i className="fa-brands"> <FaInstagram/></i></a></li>
       </ul>
      </header>
    </div>
  );
}

export default App;
