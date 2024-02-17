  import "./cover.css"
  import image1 from "../../images/car.jpg"
  import image2 from "../../images/photo_2024-01-07_15-01-49.jpg"
  function Cover(){
    return(
        <>
        <h3>Your Profile</h3>
        <div className="container">
            <div>
                <div className="parent">
                <img  className="backimage" src={image1} alt="cover page" />
                <button className="bntcover">Edit</button>
                <img className="proimage" src={image2} alt="Profile" />
                
            </div>
            <p className="name">Biniyam</p>
            <button className="btnpro">Edit</button>
            </div>
            <div >
               
                
               
            </div>

        </div>

        </>
    )
  }
  export default Cover