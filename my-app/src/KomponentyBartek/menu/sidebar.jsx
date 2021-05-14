import react, { useState } from "react";

function Bar() {
    const [show, setIsShow] = useState(true);

    return (
        <div>
            {show ? (
                <div id="menuShow">
                    <button className="button1" onClick={() => setIsShow(false)}>
                        Schowaj
                    </button>
                </div>
            ) : (
                <div id="menuHidden">
                    <button className="button2" onClick={() => setIsShow(true)}>
                        Wysuń
                    </button>
                </div>
            )}
        </div>
    );
}

export default Bar;
