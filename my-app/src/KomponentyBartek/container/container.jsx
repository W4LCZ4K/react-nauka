import "../Css/bartek.css";
import Hotel from "./Hotel.jsx";
function Container() {
    const hotels = [
        {
            id: "1",
            name: "hotel 1",
        },
        {
            id: "2",
            name: "hotel 2",
        },
        {
            id: "3",
            name: "hotel 3",
        },
    ];
    const list = hotels.map((el) => <Hotel key={el.id} name={el.name} />);
    return <div id="container">{list}</div>;
}
export default Container;
