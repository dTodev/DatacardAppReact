import DataCard from "./components/DataCard";
import "./App.css";
import { useState } from "react";
import peopleData from "./data.jsx";
import AddCard from "./components/AddCard";
import { nanoid } from "nanoid"

function App() {
  const [peopleList, setPeopleList] = useState(peopleData);
  const [addIsActivated, setAddIsActivated] = useState(false);

  function handleClick() {
    setAddIsActivated((prev) => !prev);
  }

  function addToList(newPerson) {
    setPeopleList((oldState) => {
      return [...oldState, newPerson];
    });
  }

  return (
    <main className="main-container">
      <button className="add-card" onClick={() => handleClick()}>
        +
      </button>
      {addIsActivated && <AddCard function={addToList} />}
      <div className="datacard-outer-container">
        {peopleList.map((entry) => (
          <DataCard key={nanoid()} data={entry} />
        ))}
      </div>
    </main>
  );
}

export default App;
