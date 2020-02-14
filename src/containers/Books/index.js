import React from 'react';
import Nav from '../../components/Nav/nav.js';


    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    class Books extends React.Component {
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
          <li> Books I recommend: </li>
              <li><a href="https://www.amazon.de/gp/product/110760463X/">A Mathematician's Apology, G. H. Hardy</a></li>
              <li><a href="https://www.amazon.com/Sense-Where-You-Are-Princeton/dp/0374526893/">A Sense Of Where You Are, John McPhee </a></li>
              <li><a href="https://www.amazon.de/Albert-Einstein-Creator-Banesh-Hoffmann/dp/058608195X">Albert Einstein: Creator and Rebel, Banesh Hoffmann, Helen Dukas</a></li>
              <li><a href="https://www.amazon.com/Barbarian-Days-Surfing-William-Finnegan/dp/0143109391">Barbarian Days, William Finnegan</a></li>
              <li><a href="https://www.amazon.com/Autobiography-Benjamin-Franklin/dp/1640320032">The Autobiography of Benjamin Franklin, Benjamin Franklin</a></li>
              <li><a href="https://www.blitzscaling.com/">Blitzscaling, Reid Hoffman, Chris Yeh</a></li>
              <li><a href="https://www.amazon.de/Brief-Answers-Big-Questions-Stephen/dp/1473695988/">Brief Answers to Big Questions, Stephen Hawking</a></li>
              <li> <a href="https://www.amazon.com/Civilisation-Kenneth-Clark/dp/0719568447">Civilisation, Kenneth Clark </a></li>
              <li><a href="http://paulgraham.com/hackpaint.html/">Hackers And Painters, Paul Graham</a></li>
              <li><a href="http://growth.eladgil.com/">High Growth Handbook,  Elad Gil</a></li>
              <li><a href="https://www.goodreads.com/book/show/13466.How_Customers_Think">How Customers Think, Gerald Zaltman</a></li>
              <li><a href="https://www.amazon.de/dp/0130305529/ref=cm_sw_r_tw_dp_U_x_Kp61Db9VM0YH1">On Lisp: Advanced Techniques for Common Lisp, Paul Graham</a></li>
              <li><a href="https://www.bahai.org/library/authoritative-texts/abdul-baha/some-answered-questions/">Some Answered Questions, Abdul'Baha</a></li>
              <li><a href="https://en.wikipedia.org/wiki/The_Act_of_Creation">The Act Of Creation, Arthur Koestler</a></li>
              <li><a href="https://www.amazon.de/Dream-Machine-M-Mitchell-Waldrop/dp/1732265119/ref=pd_cp_14_1/259-8828952-8519312?_encoding=UTF8&pd_rd_i=1732265119&pd_rd_r=9d64965e-774e-11e9-befd-7173e4d2ac77&pd_rd_w=t117v&pd_rd_wg=Oyt87&pf_rd_p=d5913aa9-ce95-4069-aa43-851c1d60ce49&pf_rd_r=68AQVAGYAYWA6BFH2QND&psc=1&refRID=68AQVAGYAYWA6BFH2QND">The Dream Machine, M. Mitchell Waldrop</a></li>
              <li><a href="https://en.wikipedia.org/wiki/The_God_Particle_(book)">The God Particle, Leon M. Lederman, Dick Teresi</a></li>
              <li><a href="https://www.amazon.com/gp/product/144261269">The Gutenberg Galaxy, Marshall McLuhan</a></li>
              <li><a href="https://montessoriguide.org/in-her-words-the-secret-of-childhood">The Secret Of Childhood, Maria Montessori</a></li>
              <li><a href="https://www.amazon.com/-/de/dp/0316491977/">The Soul of A New Machine, Tracy Kidder </a></li>
              <li><a href="https://www.amazon.com/exec/obidos/ASIN/0961392142">The Visual Display Of Quantitative Information, Edward R. Tufte </a></li>
              <li><a href="https://www.amazon.com/exec/obidos/ASIN/0674897013/">Toward A Theory Of Instruction, Jerome Bruner</a></li>
              <li><a href="https://withouttheirpermission.com/">Without Their Permission, Alexis Ohanian</a></li>
              <li><a href="https://www.goodreads.com/book/show/18050143-zero-to-one">Zero To One, Peter Thiel</a></li>

          </ul>
        </div>
      </body>
    </div>
);
  }
}

export default Books;
