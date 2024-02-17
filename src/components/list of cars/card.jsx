import image1 from "../../images/pn.png";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./card.css";
import { useState } from "react";

function Card({ car }) {
  const [click, setclick] = useState(true);
  return (
    <>
      <div className="con">
        <div className="head">
          <p className="car-name">{car.title}</p>
          <div onClick={()=>setclick((prev) => !prev)}>
            {click ? <CiHeart /> : <FaHeart size={20} color="red"/>}
          </div>
        </div>

        <div>
          <img className="images-of-cars" src={car.image} alt="Car" />
        </div>

        <div className="bottom">
          <div className="money">
            <p className="money">$123,343</p>
          </div>
          <div className="favb">
            <button className="btn">Collect</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
