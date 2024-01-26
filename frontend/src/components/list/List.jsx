import "./list.css";

const List = ({ type }) => {
  return (
    <section className="list-container">
      <h2>{type} </h2>
      <div className="property-list">
        <div className="property-item">
          <img src="/Monsieur-de-North.jpg" />
          <h3>1</h3>
          <p>Lagos,Nigeria</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            veniam!
          </p>
          <div className="price">$200/night</div>
          <button>View Details</button>
        </div>
        <div className="property-item">
          <img src="/Monsieur-de-North.jpg" />
          <h3>1</h3>
          <p>Lagos,Nigeria</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            veniam!
          </p>
          <div className="price">$200/night</div>
          <button>View Details</button>
        </div>
        <div className="property-item">
          <img src="/b.jpg" />
          <h3>1</h3>
          <p>Lagos,Nigeria</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            veniam!
          </p>
          <div className="price">$200/night</div>
          <button>View Details</button>
        </div>
        <div className="property-item">
          <img src="/Monsieur-de-North.jpg" />
          <h3>1</h3>
          <p>Lagos,Nigeria</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            veniam!
          </p>
          <div className="price">$200/night</div>
          <button>View Details</button>
        </div>
        <div className="property-item">
          <img src="/Monsieur-de-North.jpg" />
          <h3>1</h3>
          <p>Lagos,Nigeria</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            veniam!
          </p>
          <div className="price">$200/night</div>
          <button>View Details</button>
        </div>
      </div>
    </section>
  );
};

export default List;
