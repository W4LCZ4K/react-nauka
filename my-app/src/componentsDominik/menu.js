import "./componentsDominik.css";
import ChangeStyle from "./switchbutton.js";

function Menu(props) {
  return (
    <div id="menu" className="element">
      <label>{props.p1}</label>
      <br></br>
      <label>{props.p2}</label>
      <br></br>
      <label>{props.p3}</label>
      <br></br>
      <ChangeStyle></ChangeStyle>
    </div>
  );
}
export default Menu;
