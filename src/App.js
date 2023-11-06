import {
  BrowserRouter as Router, Routes, Route, Link, NavLink
  // , Redirect 
} from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
// import Header from './components/Header';
import Logo from './components/Logo';
import HomePage from './components/HomePage';
import WebDesign from './components/WebDesign';
import Photography from './components/Photography';
import Drawings from './components/Drawings';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Vision from './components/Vision';

// styling
import './assets/style/style.css';

const App = () => {
  const [showHomePage, setShowHomePage] = useState(true);

  function handleLogoClick() {
    setShowHomePage(true);
  }


  useEffect(() => {
    // Add any necessary side effects
  }, []);

  return (
    <div>
      <Router>

        <header className='menu'>
          <nav >
            <ul className='menu'>
              <li>
                <Link to="/" onClick={handleLogoClick} className='visited-link'>
                  <Logo />
                </Link>
              </li>
              <li>
                <NavLink className='visited-link' to='/photography' activeClassName="active-link">Photography</NavLink>
              </li>
              <li>
                <NavLink className='visited-link' to='/web-design' activeClassName="active-link">Web Design</NavLink>
              </li>
              {/* <li>
                <NavLink className='visited-link' to='/drawings' activeClassName="active-link">Drawings</NavLink>
              </li> */}
              <li>
                <NavLink className='visited-link' to='/bio' activeClassName="active-link">Bio</NavLink>
              </li>
              <li>
                <NavLink className='visited-link' to='/contact' activeClassName="active-link">Contact</NavLink>
              </li>
              <br/>
              <li>
                <NavLink className='visited-link' to='/vision' activeClassName="active-link">Future Vision</NavLink>
              </li>
              <br/>
              <li className='visited-link'><a href='https://www.instagram.com/august_omen/' target='_blank' rel='noreferrer'>instagram</a></li>
            </ul>
          </nav>

        </header>


        <div data-scroll-container>
          <Routes>
            <Route exact path="/" element={showHomePage ? <HomePage /> : <HomePage />} />

            {/* Route for React v18.2.0 */}
            <Route path='/web-design' element={<WebDesign />} />
            <Route path='/photography' element={<Photography />} />
            <Route path='/drawings' element={<Drawings />} />
            <Route path='/bio' element={<Bio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/vision' element={<Vision />} />


            <Route path="/404">
              {/* <NotFound /> */}
            </Route>
            {/* <Redirect to="/404" /> */}
            {/* niu merge not found */}
            {/* <Route path='*' component={NotFound}/> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;