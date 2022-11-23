import React, { useState, useEffect } from "react";
// import { createWorker } from "tesseract.js";
import TeslaPic from "../../assets/images/billboard-copy.jpg";

const Practice = () => {
  const inputElement = document.getElementById("input");
  const [inpFile, setInpFile] = useState();
  const [wjoTable, setWjoTable] = useState();
  const reader = new FileReader();
  const [text1, setText1] = useState();
  const regexLineBreak = new RegExp(/\r?\n/);
  const [allWjos, setAllWjos] = useState("");
  const [location, setLocation] = useState("");
  const [ocr, setOcr] = useState("Recognizing...");

  // const worker = createWorker({
  //   logger: (m) => console.log(m),
  // });

  // const doOCR = async () => {
  //   await worker.load();
  //   await worker.loadLanguage("eng");
  //   await worker.initialize("eng");
  //   const {
  //     data: { text },
  //   } = await worker.recognize(TeslaPic);
  //   setOcr(text);
  //   console.log("text: " + text);
  //   await worker.terminate();
  // };

  // useEffect(() => {
  //   doOCR();
  // }, [ocr]);

  //   const output = document.getElementById("files");

  const onFileChange = (e) => {
    // setInpFile(e.target.files[0]);
    // for (const files in FileList) {
    reader.readAsText(e.target.files[0]);
    console.log(FileList.length);
    // }
    reader.onloadend = () => {
      let WjoArr = reader.result.split(regexLineBreak);
      WjoArr.pop();
      setText1(WjoArr);
    };
  };

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => {
        setLocation({ errorMessage: err.message });
      }
    );
  };

  const onConfirmSubmission = async (e) => {
    for (let i = 0; i < text1.length; i++) {
      try {
        const body = {
          description: text1[i],
          time: new Date(),
          location: location,
          match: 0,
        };
        console.log(JSON.stringify(body));
        const response = await fetch("http://localhost:8080/wjos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const onConfirmView = async (e) => {
    const res = await fetch("http://localhost:8080/wjos", {
      method: "GET",
    });
    const placeholder = await res.json();

    setAllWjos(placeholder.map((desc) => ` ${desc.description}, `));
  };

  useEffect(() => {
    getLocation();

    if (text1) {
      setWjoTable(text1.map((wjo) => <div>{wjo}</div>));
    } else setWjoTable("hasnt loaded yet!");
  }, [text1]);

  return (
    <div>
      hello
      <input
        id="input"
        multiple
        type="file"
        onChange={onFileChange}
        accept=".csv"
      />
      <button onClick={onConfirmSubmission}>Confirm Submission</button>
      <div id="files">{wjoTable}</div>
      <div>
        <h3 id="allFiles">View all WJOs</h3>
        <button onClick={onConfirmView}>View all WJOs</button>
        {allWjos}
      </div>
      {ocr}
    </div>
  );
};

export default Practice;
//npm i express-fileupload
