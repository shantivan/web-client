// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import placeHolderLogo from "./assets/placeholder-logo.jpg";

import "./App.css";

const CDN_URL: String = import.meta.env.VITE_CDN_URL;

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vite.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
      <div>Under construction...</div>
      <img src={placeHolderLogo} alt="placeholder" style={{ width: "100%" }} />
      <img
        src={`${CDN_URL}/farm-pics/Back of Structure - Rear view of property featuring a sunroom and a lawn.jpg`}
        alt="Back of Structure - Rear view of property featuring a sunroom and a lawn.jpg"
        style={{ width: "100%" }}
      />
      <img
        src={`${CDN_URL}/farm-pics/IMG_0008.JPG`}
        alt={"Sukhi on tractor"}
        style={{ width: "100%" }}
      />
      <img
        src={`${CDN_URL}/farm-pics/IMG_0223.JPG`}
        alt={"Sukhi"}
        style={{ width: "100%" }}
      />
      <img
        src={`${CDN_URL}/farm-pics/IMG_0397.JPG`}
        alt={"Sukhi at sunset"}
        style={{ width: "100%" }}
      />
      <img
        src={`${CDN_URL}/farm-pics/IMG_0714.JPG`}
        alt={"Sukhi farming"}
        style={{ width: "100%" }}
      />
      <img
        src={`${CDN_URL}/farm-pics/IMG_0722.JPG`}
        alt={"Persimmon"}
        style={{ width: "100%" }}
      />{" "}
      <img
        src={`${CDN_URL}/farm-pics/IMG_0731.JPG`}
        alt={"Sukhi + Suren"}
        style={{ width: "100%" }}
      />{" "}
      <img
        src={`${CDN_URL}/farm-pics/IMG_7058.JPG`}
        alt={"Berries"}
        style={{ width: "100%" }}
      />{" "}
      <img
        src={`${CDN_URL}/farm-pics/IMG_7059.JPG`}
        alt={"Berries"}
        style={{ width: "100%" }}
      />
    </>
  );
}

export default App;
