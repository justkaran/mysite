import React from 'react';
import Nav from '../../components/Nav/nav.js';

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Quotes extends React.Component {
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
            <div>
            <ul id="quotes">
              <li> Quotes </li>
              <li> "The earth is but one country and mankind its citizens." Baha'u'llah </li>
              <li> "Learn the rules like a pro, so you can break them like an artist." Picasso </li>
              <li>"Context adds 80 IQ points." Alan Kay</li>
              <li> "Focusing is about saying no." Steve Jobs </li>
              <li>"You are making the kids cry and you know it well."  My 5 year old son, talking to all adults </li>
              <li> "A mathematician, like a painter or poet, is a maker of patterns. If his patterns are more permanent than theirs, it is because they are made with ideas." G. H. Hardy
              </li>
              <li>
              "Until people are about 15 years old the day determines the person. After that the day is determined by man. If by then you have nothing that determines your day in a positive way, you will slowly start to suffer." Linus van Pelt
              </li>
              <li>
              "You've got to have a purpose in life." Arnold Schwarzenegger</li>
            </ul>
             </div>
            </div>
          </body>
        </div>
    );
      }
    }

export default Quotes;
