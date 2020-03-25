import React from 'react';
import Nav from '../../components/Nav/nav.js';

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Blog extends React.Component {
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
            <ul>
            <li><b>Blog - Each post has less than 100 chars.</b></li>
            <li><h3>For the first time in history everybody on earth has the same wish.</h3>
            <p>We will get an international institution with executive power.</p>
            <p>March 25, 2020</p>
            </li>

            <li><h3>Read the autobiography of Benjamin Franklin.</h3><p>It will help you to organize your life.</p>  <p>January 3, 2020</p></li>
          <li>
            <h3>Learn only what truly interests you.</h3> <p>It will help you avoid lying to yourself while learning.</p>
            <p>December 15, 2019</p>
          </li>
          <li>
            <h3>Germany doesn't have enough startups per capita.</h3> <p> It should stop taxing early-stage investors.</p>
            <p>December 9, 2019</p>
          </li>
            </ul>

           </div>
          </body>
      </div>
      );
        }
      }

export default Blog;
