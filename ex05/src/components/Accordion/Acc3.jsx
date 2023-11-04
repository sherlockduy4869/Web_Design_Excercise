import "./AccordionStyle.css";
import { useState, useEffect } from "react";

const Acc3 = () => {
  const [listAcc, setListAcc] = useState([]);

  useEffect(() => {
    const getListAcc = async () => {
      const getListAccFromServer = await fetchListAcc();
      setListAcc(getListAccFromServer);
    };
    getListAcc();
  }, []);

  const fetchListAcc = async () => {
    const urlBase = "https://awd-2023.azurewebsites.net/Accordions";
    const res = await fetch(urlBase, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "student-name": "Duy",
      },
      method: "GET",
    });
    const data = await res.json();
    return data;
  };

  console.log(listAcc);

  return (
    <div>
      {listAcc.map((acc, index) => (
        <div>
          <h2>Accordion with symbols</h2>
          <button className="accordion">{acc.title}</button>
          <div className="">
            <p>{acc.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Acc3;
