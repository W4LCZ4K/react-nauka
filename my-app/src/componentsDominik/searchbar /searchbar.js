import { useState } from "react";
function Searchbar(props) {
  const [usersTable, setusersTable] = useState(props.users);
  const [searchValue, setsearchValue] = useState("");

  return (
    <div>
      <input
        id="seachBar"
        onChange={(e) => setsearchValue(e.target.value)}
      ></input>
      <button onClick={(e) => checklist(searchValue, usersTable)}>
        Search
      </button>
    </div>
  );
}

function checklist(name, tab) {
  var resolut = [];
  tab.map((e) => {
    if (e.imie == name) resolut.push(e);
  });

  console.log(resolut);
}
export default Searchbar;
