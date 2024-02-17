import "./add.css";
import Header from "../components/header/header";
import { Link, } from "react-router-dom";

function Add() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="nav">
          <h3>Home</h3>
          <div className="group">
            <h3>Search</h3>
            <span className="search">
              <input type="search" name="" id="" className="searchinp" />
            </span>
          </div>
          <h3>
            <Link to="/">Home </Link></h3>
        </div>
        <div className="info">
          <h2 className="h2">Add car for Rent</h2>
          <h4 className="h4">Pleas Enter your car info</h4>
        </div>
        <div className="subbody">
          <div className="cont1">
            <div className="cont2">
              <div className="lab1">
                <label className="title">Car Name</label>
                <input type="text" placeholder="name..." className="inp" />
                <br />
              </div>
              <div className="lab2">
                <label className="title">Rent Price</label>
                <input type="text" placeholder="name..." className="inp" />
                <br />
              </div>
              <div className="lab3">
                <label className="title">Transmition</label>
                <select type="select" placeholder="name..." className="inp" />
                <br />
              </div>
              <div className="lab4">
                <label className="title">Fuel Capacity</label>
                <input type="text" placeholder="name..." className="inp" />
                <br />
              </div>
            </div>

            <div className="cont3">
              <div className="lab1">
                <label className="title">Car Type</label>
                <input type="text" placeholder="name..." className="inp" />
                <br />
              </div>
              <div className="lab2">
                <label className="title">Capacity</label>
                <input type="text" placeholder="name..." className="inp" />
                <br />
              </div>
              <div className="lab3">
                <label className="title">Location</label>
                <select type="select" placeholder="name..." className="inp" />
                <br />
              </div>
              <div className="lab4">
                <label className="title">Discription</label>
                <input type="text" placeholder="name..." className="inp" />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img">
        <input type="file" name="Image" className="file" />
      </div>
      <div className="btndiv">
        <button className="btnsub">Submite</button>
      </div>
    </>
  );
}
export default Add;
