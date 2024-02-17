import "./profile.css";
import Card from "./components/list of cars/card.jsx";
import Header from "../src/components/header/header.jsx";
import Cover from "./components/profile cover/cover.jsx";
import { cars } from "./db/db.js";

function Profile() {
  return (
    <>
      <Header />
      <Cover />
      <div className="pro">
        {cars.map((car) => (

          <Card key={car.id} car={car} />
          
        ))}
      </div>
    </>
  );
}
export default Profile;
