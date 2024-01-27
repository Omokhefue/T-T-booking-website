import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import "./login.css";

const Login = () => {
  const fields = [
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
  ];

  const extraSignupElements = (
    <div className="login-extras">
      <p>You don't have an account?</p>
      <Link to="/signup">Register</Link>
    </div>
  );
  return (
    <Form
      formType={"login"}
      heading={"Welcome"}
      buttonText={"Login"}
      fields={fields}
      extraElements={extraSignupElements}
      img={"/Monsieur-de-North.jpg"}
    />
  );
};

export default Login;
