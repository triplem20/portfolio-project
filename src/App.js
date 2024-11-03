import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar.js';
import Main from './Components/flipCard.js';
import AboutMe from './Components/aboutMe.js';
import { Contact } from './Components/contact.js';
import { Projects } from './Components/Projects.js';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div className="App">
       <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
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
