import PersonContent from "../personalcontent/personcontent";
import { useEffect, useState } from "react";

function Container(props) {
  const flist = [
    { imie: "Jan", nazwisko: "Kowalski" },
    { imie: "Robert", nazwisko: "Lewandowski" },
    { imie: "Adam", nazwisko: "Kowalski" },
    { imie: "Jan", nazwisko: "Lewandowski" },
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
    <div>
      <PersonContent
        name={osoba.imie}
        surrname={osoba.nazwisko}
      ></PersonContent>
    </div>
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
