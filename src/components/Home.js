import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
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
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview">
          How HTTP works
        </a>
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
      <h3>Tips and tricks with React</h3>
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
      <h3 className="links">Cool links</h3>
      <div style={{ color: "yellowgreen" }}>
        <a href="https://frame.work">Modular laptops</a>
        <a href=""></a>
      </div>
    </div>
  );
};

export default Home;
