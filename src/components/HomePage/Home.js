import React from "react";
import "./Home.css";

const Home = () => {
  let key = 1;
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
    {
      href: "https://chakra-ui.com",
      desc: "useful css library",
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
      key++;
      return (
        <div key={key}>
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
      key++;
      return <li key={key}>{x}</li>;
    });

  return (
    <div className="all-content">
      <h3>Welcome to my portfolio!</h3>
      <p>
        Yes, my portfolio is messy! I am always working on it. Currently, I am
        learning React and everything to do with web development. My hobbies
        include piano, riding my bicycle, and spending time with my family.
      </p>
      {title("List of notes for web dev")}
      {listSites(webDevNotes)}
      {title("List of stuff for me to study and know")}
      {listSites(studyStuff)}
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
        <dt>
          <b>window, document, event</b>
        </dt>
        <dd>
          Three very important things to learn about, look up MDN documentation.
        </dd>
        <dt>
          <b>Spreading and destructuring</b>
        </dt>
        <dd>
          spreading 'expands' an array or object (takes elements out of
          brackets). Destructuring 'unpacks' an array or object (assigns
          elements to vars).
        </dd>
        <dt>
          <b>Classes</b>
        </dt>
        <dd>
          extending a class creates a child and lets you add/modify properties
        </dd>
        <dt>
          <b>Prototypes</b>
        </dt>
        <dd>
          every object has a prototype, and every prototype has a prototype
          (until you reach null)
        </dd>
        <dt>
          <b>'this' keyword</b>
        </dt>
        <dd>
          'this' is pretty confusing, but is a big part of pointing to desired
          property of classes
        </dd>
      </dl>
      {title("Useful Programs for PC")}
      <ul>{list(usefulPrograms)}</ul>
      {title("List of stretches for bicycle")}
      <ul>
        <li>
          Hip flexor stretch - Place one knee on the floor (use a cushion or mat
          under your knee if needed) and place the other foot in front of you to
          make a 90-degree angle at the hip and knee. Tilt the pelvis up towards
          your ribcage on the side where the knee is on the floor. This should
          already start to bring on some gentle tension at the front of the hip.
          Now squeeze your glute muscles and slowly push the hip on the kneeling
          leg further forward to increase the stretch sensation. Avoid arching
          your lower back. Slowly ease back to the start position before
          repeating. How to make it harder: “To really add extra benefit, reach
          the arm on the kneeling side up overhead towards the ceiling as you
          push into the stretch,” adds McCullough.
        </li>
        <li>
          Hamstring stretch - Begin by half kneeling with one leg in front with
          a relaxed bend at the knee. Sit back towards your heel and slowly
          straighten the knee. As you do so, try to keep your chest upright and
          push it forward to increase the stretch. Hold this position for 20-30
          seconds and then ease back out. You should feel the stretch in the
          back of your thigh. How to make it harder: “Changing the knee angle
          will increase the effect of stretch on the lower hamstring,” says
          McCullough. “You can also reach forwards to increase the stretch at
          the upper hamstring.”
        </li>
        <li>
          Glute stretch - Kneel on the floor with your arms out in front of you
          in a tabletop pose. Cross one leg in front of you so that the foot is
          just in front of the opposite knee. Sit back towards the floor, slowly
          increasing the stretch around the outside of the front hip/glutes.
          Hold this position for 20-30 seconds and then ease back out. You can
          lean your body further forward over the front knee to increase the
          stretch. How to make it harder: “Make it harder by adding a side bend
          stretch into the torso to open up the side of the abdominal and lower
          back area,” says McCullough.
        </li>
        <li>
          Lower back rotation - 5-10secs per side; 5 reps Benefits: “Your lower
          back is under a lot of pressure while riding and it’s nearly always
          fixed in a forward bend while trying to keep steady as you pedal,”
          explains McCullough. “This drill allows you to free up that lower-back
          tension while also providing a nice stretch for your outer hips and
          chest, too.” Lying on the floor, bend both of your knees up, keeping
          your feet on the floor, then cross one leg over the other. Try to keep
          your arms out to the side and flat on the floor. Take a breath in
          through your nose and then, as you gently breathe out, allow your legs
          to drop over towards the floor in the direction that the top leg is
          crossed over. Hold this position for 5-10 seconds and try to ensure
          you are letting go of any tension in your lower back. Return to the
          centre and repeat the sequence on the other side. How to make it
          harder: “Keep the top leg straight as it lifts over the other leg and
          drops down to the floor,” says McCullough.
        </li>
        <li>
          Marching calf mobility - For those that do yoga this position will be
          familiar – it’s known as Downward Facing Dog. You are essentially
          placing your weight on your hands and feet and trying to make the
          shape of a triangle. Your ability to achieve this exact position will
          vary based on your flexibility but don’t worry if you need to bend
          your knees a little – work to your own comfort limits. Once in
          position, press one heel back down towards the floor (you’ll feel the
          calf stretch) while the other foot rolls up onto the toes and your
          knee bends. Hold briefly before alternating to the other side and
          repeating the movement with steady changes from side to side. How to
          make it harder: “The key is to aim for a triangle shape with a flat
          lower back, straight knees while getting the heel down to the floor,”
          says McCullough.
        </li>
        <li>
          Standing pigeon pose - “This is an essential stretch for cyclists of
          all disciplines,” says Sharland. “This works on your piriformis – a
          deep muscle behind your glutes – as well as your gluteus muscles.
          These muscles have a habit of shortening and often contribute to
          lower-back pain, which is common in cyclists.” Make sure you position
          your feet hip-width apart and stabilise yourself. Lift your right leg
          up and rest your right ankle on your left knee. With your right leg
          crossed over and resting on your left leg, bend down with your left
          leg as if you are sitting on a chair (hold on to something if you
          require more stability). Set your focus on a stable position and feel
          the deep stretch across the gluteus maximus throughout the hold.
          Return to a standing position and repeat on the other leg. How to make
          it harder: “To intensify the stretch, gently add pressure with your
          right elbow and push towards the ground,” says Sharland.
        </li>
        <li>
          Standing quad stretch - “Quadriceps are one of the powerhouse muscles
          for cycling,” explains Sharland. “Keeping them strong and flexible
          will help reduce the chance of injury.” Start off standing with your
          legs hip-width apart. Lift your right leg and grab your right foot in
          your right hand while moving your heel as close to your gluteus
          maximus as possible. Gently bring your knees together and push the hip
          of the bent leg forward while keeping your knee pointed to the ground.
          Keep your body still – be in the moment and take a deep breath. You
          will feel the stretch on the quad muscle of your bent leg. You can
          increase the stretch by pushing your hip forward, but remember not to
          arch your back and to keep your core engaged. Return to a standing
          position and repeat on the other leg. How to make it harder: “To make
          it harder, push your hip forward while keeping your core engaged,”
          says Sharland. “Your goal is for your heel to touch your bum while
          keeping your knees together.”
        </li>
        <li>
          Raised calf stretch - “Your calves have a number of layers of muscle,”
          says Sharland. “Cycling tends to shorten these muscles, which can lead
          to ankle and knee issues.” Grab a yoga block or anything slightly
          elevated such as a book. Start off with your legs parallel to each
          other. Position your right foot on the block, with your toes exerting
          pressure and your heel dropped down to the ground. At the same time,
          move your left leg backwards to intensify the deep calf stretch. To
          activate the full stretch, lean forward with your upper body and
          create a 90-degree angle while keeping your stretched leg straight.
          Keep your core tense by sucking your belly towards your spine as you
          position your upper body parallel to the ground. Return to a standing
          position and repeat on the other side. How to make it harder: “To
          increase the intensity, bend the back of the knee slightly,” says
          Sharland. “This will stretch your soleus muscle.”
        </li>
        <li>
          Advanced hamstring and iliotibial band stretch - “This stretch mostly
          benefits your ITB,” says Sharland. “If this band tightens, it can
          result in pain in the knee and unbalanced lower limbs.” In a standing
          position, cross your left leg in front of your right. Try to get your
          toes parallel. Lift your arms above your head and gently bend all the
          way down as if touching your toes. Feel the stretch down the back and
          on the outside of your legs. Take a few deep breaths as you rest the
          weight of your upper body and try to lower your body closer to the
          ground. Gently come back into standing by looking at your belly button
          as you come all the way back up. Repeat the pose on the other leg. How
          to make it harder: “You can try to straighten the legs to make it
          harder,” says Sharland. “If you are really tight, lean forwards and
          hold on to a chair.”
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
      <h4>just a small test</h4>
    </div>
  );
};

export default Home;
