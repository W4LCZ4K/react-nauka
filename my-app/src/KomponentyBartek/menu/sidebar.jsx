import react, { Component, useState } from "react";

function Bar()
{
    const [show, setIsShow] = useState(true);

  return (
    <div>
      {show ? (<div id="menu">
        <button className="button1" onClick={() => setIsShow(false)}>
          Schowaj
        </button>
        </div>
      ) : (
          <div id="menu1">
        <button className="button2" onClick={() => setIsShow(true)}>
              Wysuń
        </button>
            </div>
      )}
    </div>
  );
}



export default Bar;