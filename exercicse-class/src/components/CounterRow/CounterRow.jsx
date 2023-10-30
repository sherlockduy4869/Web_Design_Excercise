import React from "react";

const CounterRow = ({ key, id }) => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const people = ["a", "b", "c", 1 ,2 ,3];

  const getListPerson = (person) => {
    if(isNaN(person)){
        return <li>{person}</li>
    }
  }

  const listItems = people.map(person => 
    getListPerson(person)
  );


  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  );
};

export default CounterRow;
