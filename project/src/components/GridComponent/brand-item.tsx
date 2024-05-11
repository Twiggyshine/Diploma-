import "./brand-item.css";
import pic1 from "/public/grid/1.jpg";
import pic2 from "/public/grid/2.jpg";
import pic3 from "/public/grid/3.jpg";
import pic4 from "/public/grid/4.jpg";

const GridComponent = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="grid-container">
          <div className="grid-item">
            <img src={pic1} alt="Image 1" />
            <div className="caption">Just In</div>
            <a
              className="button grid__link"
              type="button"
              href="#"
              draggable="false"
            >
              Shop
            </a>
          </div>
          <div className="grid-item">
            <img src={pic2} alt="Image 2" />
            <div className="caption">New Arrivals</div>
            <a
              className="button grid__link"
              type="button"
              href="#"
              draggable="false"
            >
              Shop
            </a>
          </div>
          <div className="grid-item">
            <img src={pic3} alt="Image 3" />
            <div className="caption">Workout</div>
            <a
              className="button grid__link"
              type="button"
              href="#"
              draggable="false"
            >
              Shop
            </a>
          </div>
          <div className="grid-item">
            <img src={pic4} alt="Image 4" />
            <div className="caption">Make your move</div>
            <a
              className="button grid__link"
              type="button"
              href="#"
              draggable="false"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridComponent;
