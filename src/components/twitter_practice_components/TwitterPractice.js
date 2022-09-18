import React from "react";

const TwitterPractice = () => {
  return (
    <div>
      {`How to set up express and react:
  1. in project directory, create two folders - client and server
  2. in server directory, type npm init to create package.json
  3. in server directory's package.json, change "main" to "server.js" instead of "index.js" (personal preference)
  4. create server.js file in server directory
  5. in server directory, type npm install express pg cors (can also $npm install nodemon -D so server auto-refreshes)
  NOTE: cors: allows different domain applications to interact with each other, pg: connects db with server to run postgresql queries
  6. in package.json, add scripts "start": "node server", and "dev": "nodemon server"
  7. in client directory, run $npx create-react-app . like usual
  8. in App.js, create functional component <App/>
  9. in server.js, look at code to get a feel. note: have to have const app = require("express")(). use listen() as well
  10. in client directory's package.json, add "proxy": "https://localhost:PORT" (make relative api requests and avoid any issues with cross-origin)
  11. 
  `}
    </div>
  );
};

export default TwitterPractice;
