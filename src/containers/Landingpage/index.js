import React, { useEffect } from 'react';
import Nav from '../../components/Nav/nav.js';
import { Mixpanel } from '../../components/Mixpanel';


    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    function Landingpage() {

      useEffect(() => {
          // Update the document title using the browser API
        Mixpanel.track('User Visit at my site');
        });


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


    export default Landingpage;
