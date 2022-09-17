import React from "react";
import "./Home.css";

const Home = () => {
  const webDevNotes = [
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
      desc: "How HTTP works",
    },
    {
      href: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md",
      desc: "You don't know JS, 2nd ed.",
    },
    { href: "https://leetcode.com", desc: "The holy grail for big brains." },
    {
      href: "https://www.freecodecamp.org/learn/",
      desc: "The best free resource for learning to code",
    },
    {
      href: "https://www.theodinproject.com/",
      desc: "Also the best free resource for learning to code",
    },
    {
      href: "https://www.khanacademy.org/computing",
      desc: "Another best free resource for learning Comp Sci",
    },
    {
      href: "https://www.interviewcake.com/",
      desc: "p2w site but still has some useful info",
    },
    {
      href: "https://launchschool.com/books",
      desc: "another p2w site but again, good info",
    },
    {
      href: "https://www.codecademy.com/article/",
      desc: "p2w site, yada yada",
    },
    {
      href: "https://alexandria-rust.vercel.app/",
      desc: "A self-taught web dev's site with a table of resources",
    },
  ];

  const coolLinks = [
    { href: "https://overthewire.org/", desc: "hacking grounds" },
    { href: "https://automatetheboringstuff.com", desc: "python basics" },
    {
      href: "https://roadmap.sh",
      desc: "various roadmaps for career paths in IT",
    },
    { href: "https://whatwg.org/", desc: "The creators of html?" },
    { href: "https://frame.work", desc: "Modular laptops" },
    { href: "https://humblebundle.com", desc: "Humble Bundle" },
    {
      href: "https://www.hoppersroppers.org/",
      desc: " Great hacking/security site",
    },
    {
      href: "https://github.com/faker-js/faker",
      desc: "Generate lots of fake data",
    },
    {
      href: "https://semantic-ui.com/",
      desc: `immediate-use UI css (link in index.html as a link element with rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        )"}`,
    },
    {
      href: "https://www.w3.org/WAI/ARIA/apg/",
      desc: "Accessible web specification",
    },
    {
      href: "https://caniuse.com/",
      desc: "Browser support for specific features",
    },
  ];

  const studyStuff = [
    { href: "https://reactnative.dev", desc: "React Native for mobile dev" },
    {
      href: "https://capacitorjs.com",
      desc: "cross platform runtime for web native apps",
    },
    { href: "https://redux.js.org/", desc: "Redux!!!" },
    {
      href: "https://koenvangilst.nl/blog/react-hooks-with-canvas",
      desc: "React hooks with Canvas",
    },
    {
      href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      desc: "guide to flexbox",
    },
    {
      href: "https://www.framer.com/developers/",
      desc: " build stuff with canvas easily",
    },
    { href: "https://docs.brew.sh/", desc: "homebrew documentation" },
    {
      href: "https://leetcode.com/discuss/career/2469217/list-of-questions-to-ask-in-an-interview",
      desc: "list of questions to ask in interview",
    },
    {
      href: "https://github.com/aceking007/100ProjectsOfCode#http-server",
      desc: "100 interesting projects",
    },
    { href: "https://r4ds.had.co.nz/", desc: "R for data science" },
    {
      href: "https://nextjs.org/learn/foundations/how-nextjs-works",
      desc: "nextjs (also read basics, routing, custom server/app/doc",
    },
    {
      href: null,
      desc: "React Context - props propagate through tree without manual passing",
    },
  ];

  const usefulPrograms = [
    "Ridnacs",
    "Spacesniffer",
    "DIsk saavy",
    "avira antivirus",
    "recuva",
    "microsoft safety scanner",
    "fixwin",
    "registry errors: windows repair free",
    "superantispyware",
    "mac: appcleaner",
    "mac: 'maintenance'",
  ];

  const youtubeChannels = [
    "ByteByteGo",
    "freeCodeCamp.org",
    "Web Dev Simplified",
    "Fireship",
  ];

  const listSites = (arr) =>
    arr.map((x) => {
      return (
        <div>
          <a href={x.href} target="_blank" rel="noopener noreferrer">
            {x.desc}
          </a>
        </div>
      );
    });

  const title = (title) => (
    <h3>
      <u>{title}</u>
    </h3>
  );

  const list = (arr) =>
    arr.map((x) => {
      return <li>{x}</li>;
    });

  return (
    <div className="all-content">
      <h3>Welcome to my portfolio!</h3>
      <p>
        Currently, I am learning React and everything to do with web
        development. My hobbies include piano, riding my bicycle, and spending
        time with my family.
      </p>
      {title("List of notes for web dev")}
      <p>{listSites(webDevNotes)}</p>
      {title("List of stuff for me to study and know")}
      <p>{listSites(studyStuff)}</p>
      {title("Cool Links")}
      {listSites(coolLinks)}
      {title("Youtube channels for comp sci/dev")}
      <ul>{list(youtubeChannels)}</ul>
      {title("Tips and tricks for React")}
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
      {title("Useful Programs for PC")}
      <ul>{list(usefulPrograms)}</ul>
      {title("List of stretches for bicycle")}
      <ul>
        <li>
          Hip flexor stretch - one knee on ground, other foot in front like
          swastika. push hip forward. squeeze glutes. try reaching arm up on
          kneeling side.
        </li>
        <li>
          Hamstring stretch - kneel with one leg, put other leg in front, slowly
          straighten knee
        </li>
      </ul>

      {title(`Song for Yoshi ("Memory" from Cats)`)}
      <p>
        Yoshi <br></br>He spends all his time barking <br></br>yet his true wish
        is <br></br>to be a real human boy <br></br>Yoshi <br></br>He stares
        into my eyes <br></br>and i see desire <br></br>to be a real human like
        me <br></br>Yoshi! <br></br>can't get on the table <br></br>or our bed
        without help because he is too small <br></br>He remembers a time{" "}
        <br></br>when he used to be king <br></br>but now, Zelda has arrived
      </p>
    </div>
  );
};

export default Home;
