import PersonContent from "../personalcontent/personcontent";

function Container(props) {
  const person = [
    { imie: "Jan", nazwisko: "Kowalski" },
    { imie: "Robert", nazwisko: "Lewandowski" },
    { imie: "Jan", nazwisko: "Kowalski" },
    { imie: "Robert", nazwisko: "Lewandowski" },
  ];

  const osoby = person.map((osoba) => {
    return (
      <PersonContent
        name={osoba.imie}
        surrname={osoba.nazwisko}
      ></PersonContent>
    );
  });
  return (
    <div className="element" id="container">
      {osoby}
    </div>
  );
}
export default Container;
