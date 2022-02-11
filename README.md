# ReactIdle
This is a super simple idle clicker built with React - State, Lifecycle, and Ref.

To run the code - I'm not too sure how to do this from the other side. I imagine you'd want to npx create-react-app, pull the code from master branch, then npm start as usual.

The hardest part was getting the setInterval() method to work with upgrading the idle clicker. The main issue was - every time the user clicked a button to damage or level up the idle clicker, setInterval() would reset; this would prevent the continuous, idle damage from occurring simultaneously with the user manually damaging the enemy. 

Initially, I tried creating two lifecycle methods - the first would invoke setInterval() and only run once. The second lifecycle would actually re-render the page whenever damage was done or a button was clicked. At first, I used a callback function to invoke setInterval(). However, every time setInterval() was invoked, a new callback function would be invoked as well, and the damage ramp up 1000's of times a second. 

After some research, the correct way to implement the fix was to use useRef(). by using a ref callback, the ref would be stored in memory and recalled with each setInterval(). This fixed the issue of a 'new' callback function being invoked with each setInterval(). 

Anyways, here is the code. It works!
