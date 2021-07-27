import "./styles.css";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Countdown from "react-countdown";

export default function App() {
  const [ct, updateTime] = useState(0);

  const incrementTime = () => {
    updateTime(ct + 1);
  };

  const decrementTime = () => {
    const ut = ct - 1;
    if (ut >= 0) {
      updateTime(ut);
    } else {
      alert("Value should not be less than zero");
    }
  };

  return (
    <div className="App">
      <Countdown date={Date.now() + 10000} />
      <h1>{ct}</h1>
      <Tooltip title="Remove">
        <Button onClick={decrementTime} className="btn-red">
          <RemoveCircleOutlineIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Add">
        <Button onClick={incrementTime} className="btn-green">
          <AddCircleOutlineOutlinedIcon />
        </Button>
      </Tooltip>
    </div>
  );
}
