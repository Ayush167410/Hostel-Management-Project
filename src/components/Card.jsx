
import "./card.css";
import pic from "./pic-one.jpeg";
import pic1 from "./pic-two.jpg";
import pic2 from "./pic-three.jpg";



function CardImage() {

  const List = ()=>{
    
   document.getElementById("card1").innerHTML= "<h1>List of Hostels In A zone</h1>";

  }


    

  return (
    <div className="card-head">

      <div className="card-group" >
        <div className="card text-bg-light mb-3 card-container" id="card1">
          <div className="card-front card-r">
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><button type="button" onClick={List} className="btn">A Zone</button></h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary"></small></p>
            </div>
          </div>
          </div>
        <div className="card text-bg-light mb-3 ">
          <img src={pic1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><button type="button" className="btn">B Zone</button></h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
        <div className="card text-bg-light mb-3">
          <img src={pic2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><button type="button" className="btn">Girls Hostel</button></h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary"></small></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CardImage;