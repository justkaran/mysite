import React, { useEffect } from 'react';
import Nav from '../../components/Nav/nav.js';
import { Mixpanel } from '../../components/Mixpanel';


    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Landingpage extends React.Component {
        componentDidMount() {
            Mixpanel.track('Hello mixpanel!');
        }

        render() {

        // track an event with optional properties
        //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (

          <div className="App">
           <header className="App-header">
           </header>
         <body>
                 <Nav />

         </body>
             </div>
        );
}
}


    export default Landingpage;
