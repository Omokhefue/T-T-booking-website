import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import "./signup.css";
const Signup = () => {
  const fields = [
    {
      id: "name",
      type: "name",
      label: "Full Name",
      placeholder: "John Brooke",
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
    },
    {
      id: "password",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm password",
    },
  ];

  const extraSignupElements = (
    <div className="signup-extras">
      <div className="TandC">
        <p>
          By creating an account, you accept our
          <br />
          <Link>Terms and Conditions</Link>
        </p>
      </div>
      <div className="login">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
  return (
    <Form
      formType={"signup"}
      heading={"Create an account"}
      buttonText={"Signup"}
      fields={fields}
      extraElements={extraSignupElements}
      img={"/Monsieur-de-North.jpg"}
    />
  );
};

export default Signup;
