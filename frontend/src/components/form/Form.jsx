import "./form.css";
import useWindowDimensions from "../../hooks/useWindowDimension.jsx";


const Form = ({
  heading,
  fields,
  buttonText,
  extraElements,
  img,
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className="section-form">
      {width >= 1286 ? (
        <div className="big-screen">
          <div className="imageContainer">
            <img src={img} alt="" />
          </div>
          <div className="details">
            <div className="form-container">
              <h2>{heading}</h2>
              <form>
                {fields.map((field) => (
                  <div key={field.id} className="form-group">
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <button type="submit">{buttonText}</button>
              </form>
            </div>
            {extraElements && extraElements}
          </div>
        </div>
      ) : (
        <>
          <div className="imageContainer">
            <img src={img} alt="" />
          </div>
          <div className="details">
            <div className="form-container">
              <h2>{heading}</h2>
              <form>
                {fields.map((field) => (
                  <div key={field.id} className="form-group">
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <button type="submit">{buttonText}</button>
              </form>
            </div>
            {extraElements && extraElements}
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
