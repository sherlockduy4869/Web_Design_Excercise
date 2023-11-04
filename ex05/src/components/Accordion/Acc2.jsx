import './AccordionStyle.css'
import { useState } from "react";

const Acc2 = () => {
    const [display, setDisplay] = useState(0);
  
    return (
      <div>
        <h2>Accordion with symbols</h2>
        <button 
        onClick={() => setDisplay(1)}
        className="accordion">Section 1</button>
        <div
          style={display === 1 ? { maxHeight: 100 } : { maxHeight: 0 }}
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
        onClick={() => setDisplay(2)}
        className="accordion">Section 2</button>
        <div 
        style={display === 2 ? { maxHeight: 100 } : { maxHeight: 0 }}
        className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
  
        <button 
        onClick={() => setDisplay(3)}
        className="accordion">Section 3</button>
        <div 
        style={display === 3 ? { maxHeight: 100 } : { maxHeight: 0 }}
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
}

export default Acc2