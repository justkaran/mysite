import React from 'react';
import Nav from '../../components/Nav/nav.js';

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Drawings extends React.Component {
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
            <img src="https://i.imgur.com/uoHSF1t.jpg" height="auto" width="400em" />
            <img src="https://i.imgur.com/L0cGTcL.jpg" height="auto" width="400em" />
            <img src="https://i.imgur.com/I8Wk4y3.png" height="auto" width="400em" />
            <p>Drawing and painting helps me think and relax. Please don't take the images too seriously. </p>
            </div>

          </body>
        </div>
      );
        }
      }

  export default Drawings;
