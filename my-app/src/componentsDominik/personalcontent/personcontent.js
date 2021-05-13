function PersonContent(props) {
  return (
    <div>
      <strong>Imie: </strong> {props.name} <strong>Nazwisko:</strong>{" "}
      {props.surrname}
    </div>
  );
}
export default PersonContent;
