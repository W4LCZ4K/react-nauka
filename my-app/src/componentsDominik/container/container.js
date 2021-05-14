import PersonContent from "../personalcontent/personcontent";
import { useState } from "react";
import uniqid from "uniqid";

function Container(props) {
  const flist = [
    { id: uniqid(), imie: "Jan", nazwisko: "Kowalski" },
    { id: uniqid(), imie: "Robert", nazwisko: "Lewandowski" },
    { id: uniqid(), imie: "Adam", nazwisko: "Kowalski" },
    { id: uniqid(), imie: "Jan", nazwisko: "Lewandowski" },
  ];

  const [person, setPerson] = useState(flist);
  const [searchValue, setSearchValue] = useState("");

  function check(word) {
    console.log(typeof word);
    if (word == "") {
      setPerson(flist);
    } else {
      var resolut = [];
      flist.map((e) => {
        if (e.imie == word) {
          resolut.push(e);
        }
        setPerson(resolut);
        return resolut;
      });
    }
  }
  var osoby = person.map((osoba) => (
    <PersonContent key={osoba.id} name={osoba.imie} surrname={osoba.nazwisko} />
  ));
  return (
    <div className="element" id="container">
      <input onChange={(e) => setSearchValue(e.target.value)}></input>
      <button onClick={() => check(searchValue)}>Search</button>
      {osoby}
    </div>
  );
}
export default Container;
