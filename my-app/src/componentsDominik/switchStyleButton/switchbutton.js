import "./../componentsDominik.css";
import { useState } from "react";

function ChangeStyleButton(props) {
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <div>
      {isSwitched ? (
        <button
          onClick={() => {
            document.body.style.backgroundColor = "grey";

            const box = document.querySelectorAll(".element");
            for (var i = 0; i < box.length; i++) {
              box[i].setAttribute(
                "style",
                "background-color:white;  border-color:blue; color:black"
              );
            }

            setIsSwitched(false);
          }}
        >
          Switch Grey
        </button>
      ) : (
        <button
          onClick={() => setIsSwitched(true)}
          onClick={() => {
            document.body.style.backgroundColor = "orange";
            const box = document.querySelectorAll(".element");
            for (var i = 0; i < box.length; i++) {
              box[i].setAttribute(
                "style",
                "background-color:grey;  border-color:black; color:white"
              );
            }

            setIsSwitched(true);
          }}
        >
          Switch Orange
        </button>
      )}
    </div>
  );
}
export default ChangeStyleButton;
