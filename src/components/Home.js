import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="all-content">
      <h3>Welcome to my portfolio!</h3>
      <p>
        Currently, I am learning React and everything to do with web
        development.<br></br>
        My hobbies include piano, riding my bicycle, and spending time with my
        family.
      </p>
      <h3>
        <u>Notes for web dev</u>
      </h3>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          How HTTP works
        </a>
        <br></br>
        <a
          href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          You don't know JS, 2nd ed.
        </a>
        <br></br>

        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The holy grail for big brains.
        </a>
        <br></br>
        <a
          href="https://www.freecodecamp.org/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The best free resource for learning to code
        </a>
        <br></br>
        <a
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Also the best free resource for learning to code
        </a>
        <br></br>
        <a
          href="https://www.khanacademy.org/computing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Another best free resource for learning Comp Sci
        </a>
        <br></br>
        <a
          href="https://www.interviewcake.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          p2w site but still has some useful info
        </a>
        <br></br>
        <a
          href="https://launchschool.com/books"
          target="_blank"
          rel="noopener noreferrer"
        >
          another p2w site but again, good info
        </a>
        <br></br>
        <a
          href="https://www.codecademy.com/article/"
          target="_blank"
          rel="noopener noreferrer"
        >
          p2w site, yada yada{" "}
        </a>
        <br></br>

        <a
          href="https://alexandria-rust.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          A self-taught web dev's site with a table of resources
        </a>
        <br></br>
      </p>
      <h3>
        <u>Tribute to Yoshi</u> (to the theme <i>Memory</i> from Cats)
      </h3>
      <p>
        Yoshi <br></br>He spends all his time barking <br></br>yet his true wish
        is <br></br>to be a real human boy <br></br>Yoshi <br></br>He stares
        into my eyes <br></br>and i see desire <br></br>to be a real human like
        me <br></br>Yoshi! <br></br>can't get on the table <br></br>or our bed
        without help because he is too small <br></br>He remembers a time{" "}
        <br></br>when he used to be king <br></br>but now, Zelda has arrived
      </p>
      <h3>
        <u>Tips and tricks with React</u>
      </h3>
      <dl>
        <dt>
          <b>Pass props from child to parent</b>
        </dt>
        <dd>Use a callback function</dd>
        <dt>
          <b>Props.children </b>
        </dt>
        <dd>
          this will return any html elements or react components under the
          component having prop passed to
        </dd>
      </dl>
      <h3 className="links">
        <u>Cool links</u>
      </h3>
      <a
        href="https://overthewire.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hacking grounds
      </a>
      <br></br>
      <a
        href="https://automatetheboringstuff.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        python basics
      </a>
      <br></br>
      <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
        various roadmaps for career paths in IT
      </a>
      <br></br>
      <a href="https://whatwg.org/" target="_blank" rel="noopener noreferrer">
        The creators of html?
      </a>
      <br></br>
      <a href="https://frame.work" target="_blank" rel="noopener noreferrer">
        Modular laptops
      </a>
      <br></br>
      <a
        href="https://humblebundle.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Humble Bundle
      </a>
      <br></br>
      <a
        href="https://www.hoppersroppers.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Great hacking/security site
      </a>
      <br></br>
      <a
        href="https://github.com/faker-js/faker"
        target="_blank"
        rel="noopener noreferrer"
      >
        Generate lots of fake data
      </a>
      <br></br>
      <a
        href="https://semantic-ui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        immediate-use UI css
      </a>
      <p>
        (link in index.html as a link element with rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        )
      </p>
      <br></br>
      <a
        href="https://www.w3.org/WAI/ARIA/apg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Accessible web specification
      </a>
      <br></br>
      <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">
        Browser support for specific features
      </a>
      <br></br>
      <h3>
        <u>List of great youtube channels for dev/comp sci</u>
      </h3>
      <ul>
        <li>ByteByteGo</li>
        <li>freeCodeCamp.org</li>
        <li>Web Dev Simplified</li>
        <li>Fireship</li>
      </ul>
      <h3>
        <u>List of stuff for me to study and know</u>
      </h3>
      <ul>
        <li>
          <a
            href="https://reactnative.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Native for mobile dev
          </a>
        </li>
        <li>
          <a
            href="https://capacitorjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            cross platform runtime for web native apps
          </a>
        </li>
        <li>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux!!!
          </a>
        </li>
        <li>
          <a
            href="https://koenvangilst.nl/blog/react-hooks-with-canvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            React hooks with Canvas
          </a>
        </li>
        <li>
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide to flexbox
          </a>
        </li>
        <li>
          <a
            href="https://www.framer.com/developers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            build stuff with canvas easily
          </a>
        </li>
        <li>
          <a
            href="https://docs.brew.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            homebrew documentation
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/discuss/career/2469217/list-of-questions-to-ask-in-an-interview"
            target="_blank"
            rel="noopener noreferrer"
          >
            list of questions to ask in interview
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aceking007/100ProjectsOfCode#http-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 interesting projects
          </a>
        </li>
        <li>
          <a
            href="https://r4ds.had.co.nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            R for data science
          </a>
        </li>
        <li>
          read nextjs docs - basics, routing, custom server/app/document. also
          read https://nextjs.org/learn/foundations/how-nextjs-works
        </li>
        <li>
          React Context - props propagate through tree without manual passing
        </li>
      </ul>
      <h3>
        <u>List of stretches for riding a bicycle</u>
      </h3>
      <ul>
        <li>
          Hip flexor stretch - one knee on ground, other foot in front like
          swastika. push hip forward. squeeze glutes. try reaching arm up on
          kneeling side.
        </li>
      </ul>
      <h3>
        <u>useful programs for windows/mac computers</u>
      </h3>
      <ul>
        <li>Ridnacs</li>
        <li>Spacesniffer</li>
        <li>DIsk saavy</li>
        <li>avira antivirus</li>
        <li>recuva</li>
        <li>microsoft safety scanner</li>
        <li>fixwin</li>
        <li>registry errors: windows repair free</li>
        <li>superantispyware</li>
        <li>mac: appcleaner</li>
        <li>mac: 'maintenance'</li>
      </ul>
    </div>
  );
};

export default Home;
