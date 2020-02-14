import React from 'react';
import Nav from '../../components/Nav/nav.js';

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Email extends React.Component {
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
            <p>I am responding to every email that is friendly. It may take a while, but I will respond. My email address is my first name at codedoor.org </p>
            </div>
          </body>
        </div>
    );
      }
    }

export default Email;
