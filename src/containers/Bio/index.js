import React from 'react';
import Nav from '../../components/Nav/nav.js';

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Bio extends React.Component {
      render() {
        return (
        <div className="App">
          <header className="App-header">
          </header>
          <body>
            <div id="menu">
              <Nav />
            </div>
            <div id="content">
              <img src="https://i.imgur.com/MA0jUB8.jpg" height="70px" />
              <p>Karan Dehghani is a developer and dad. In 1997 he programmed and launched an online store, Geschenk24.com. It was acquired by <a href="https://www.metroag.de/en/">Metro</a> in 2001. </p>
              <p>In 2015 Karan initialized <a href="https://www.CodeDoor.com">CodeDoor.org</a>. It's a network of programmers in +50 countries that helps people to learn how to learn how to code and helps the best ones to find a hard-earned job.</p>
              <p> In 2018 he initiated a project in Germany that allows students conduct experiments with astronauts on the <a href="http://www.schulenimweltraum.de">ISS.</a></p>
              <p> In 2020 he made the best Pizza you can think of.</p>
            </div>
          </body>
        </div>
    );
      }
    }

export default Bio;
