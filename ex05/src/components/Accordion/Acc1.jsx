import './AccordionStyle.css'
import { useState } from "react";

const Acc1 = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);

  return (
    <div>
      <h2>Accordion with symbols</h2>
      <button 
      onClick={() => setDisplay1(!display1)}
      className="accordion">Section 1</button>
      <div
        style={display1 ? { maxHeight: 100 } : { maxHeight: 0 }}
        className="panel"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button 
      onClick={() => setDisplay2(!display2)}
      className="accordion">Section 2</button>
      <div 
      style={display2 ? { maxHeight: 100 } : { maxHeight: 0 }}
      className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button 
      onClick={() => setDisplay3(!display3)}
      className="accordion">Section 3</button>
      <div 
      style={display3 ? { maxHeight: 100 } : { maxHeight: 0 }}
      className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Acc1;
