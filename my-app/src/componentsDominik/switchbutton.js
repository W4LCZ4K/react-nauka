import "./componentsDominik.css";

function ChangeStyleButton(props) {
  return (
    <button onClick={() => (document.body.style.backgroundColor = "red")}>
      Style
    </button>
  );
}
export default ChangeStyleButton;
