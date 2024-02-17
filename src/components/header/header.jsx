  import image1 from "../../images/download.jpg"
  import "./header.css"
  function Header(){
       return(
    <div className="bar">
        <div ><img className="logo" src={image1} alt="logo" /></div>
        <div className="navbar">
            <ul>
                <li>About As</li>
                <li>Contact A</li>
                <li>Help</li>
            </ul>
        </div>
    </div>
       )
  }

  export default Header