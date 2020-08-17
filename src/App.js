import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Mixpanel } from './components/Mixpanel';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';

import { publicRoutes } from "./routes";
function App() {
Mixpanel.track('User Visit at MySite');

  return (
    <div className="App">
      <header className="App-header">
      </header>
    <body>
      <div>
    <div>Karan</div>
    <ul id="menu" className="left">
      <li><a href="/">Home</a></li>
      <li><a href="/books">Books</a></li>
      <li><a href="/bio">Bio</a></li>
      <li><a href="/quotes">Quotes</a></li>
      <li><a href="/email">My Email</a></li>
      <li><a href="/drawings">Drawings</a></li>
      <li><a href="/blog">Blog</a></li>
      <svg className="left" xmlns="http://www.w3.org/2000/svg" viewBox="900 0 9900 220"><path fill="#a2d9ff" fill-opacity="1" d="M0,96L80,80C160,64,320,32,480,37.3C640,43,800,85,960,85.3C1120,85,1280,43,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </ul>

    </div>
    <footer class="footer">
    </footer>
    </body>
        </div>
  );
}

export default App;
