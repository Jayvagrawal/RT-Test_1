import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const App = () => {
  const [item, setItem] = useState("");

  const [newItem, setNewItem] = useState([]);

  const updateItemEvent = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem(" ");
  };

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div"></div>
        <br />
        <h1>To-Do-List</h1>
        <br />
        <input
          type="text"
          value={item}
          placeholder="Enter Your Text"
          onChange={itemEvent}
        />
        <Button className="newBtn" onClick={updateItemEvent}>
          <AddIcon />
        </Button>
        <ol>
          {newItem.map((value, index) => {
            return <List key={index} text={value} />;
          })}
        </ol>
      </div>
    </>
  );
};

const List = (props) => {
  const [line, updateLine] = useState(false);

  const updateTheLine = () => {
    updateLine(true);
  };

  return (
    <>
      <div>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {" "}
          <DeleteIcon onClick={updateTheLine} />
          {props.text}
        </li>
      </div>
    </>
  );
};

export default App;
