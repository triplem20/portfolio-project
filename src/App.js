import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar.js';
import Main from './Components/flipCard.js';
import AboutMe from './Components/aboutMe.js';
import { Contact } from './Components/contact.js';
import { Projects } from './Components/Projects.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/About' element={<AboutMe />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contact' element={<Contact />} />

      </Routes>
    

    </div>
  );
}

export default App;
