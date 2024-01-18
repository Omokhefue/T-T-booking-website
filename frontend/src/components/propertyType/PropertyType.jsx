import "./propertyType.css";

const PropertyType = () => {
  return (
    <section className="section">
      <h2 className="section-heading">Browse By propertyType</h2>
      <span className="section-span"></span>

      <div className="propertyTypeList">
        <div className="propertyTypeListItem">
          <img src="Monsieur-de-North.jpg" alt="" />
          <h6 className="propertyName">Hotels</h6>
          <p>200 hotels</p>
        </div>
        <div className="propertyTypeListItem">
          <img src="Monsieur-de-North.jpg" alt="" />
          <h6 className="propertyName">Apartments</h6>
          <p>2688 hotels</p>
        </div>
        <div className="propertyTypeListItem">
          <img src="Monsieur-de-North.jpg" alt="" />
          <h6 className="propertyName">Cabins</h6>
          <p>30 hotels</p>
        </div>
      </div>
    </section>
  );
};
export default PropertyType;
