import React from "react";
import "./EditEvent.css";

const EditEvent = (props) => {
  return (
    <div className="edit-event">
      <div className="edit-event__input-group">
        <label htmlFor="name">EVENT NAME</label>
        <input
          type="text "
          id="name"
          name="name"
          value={props.name}
          className="input1"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="hour">HOUR</label>
        <input
          type="tel "
          id="hour"
          name="hour"
          value={props.hour}
          className="input1"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="edit-event__input-group">
        <label htmlFor="minute">MINUTE</label>
        <input
          type="tel "
          id="minute"
          name="minute"
          value={props.minute}
          className="input1"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="butContainer">
        <button onClick={() => props.onSave()} className="but" id="but1">
          OK
        </button>
        <button className="but" id="but2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditEvent;
