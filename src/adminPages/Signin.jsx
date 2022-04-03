import { Link, Navigate } from "react-router-dom";
import "./Signin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinUser = () => {
    if (email.length === 0) toast.warning("Please enter email-id");
    else if (password.length === 0) toast.warning("Please enter password");
    else {
      const body = {
        email,
        password,
      };

      console.log(body);
      const url = `${URL}/users/findByEmail`;

      axios.post(url, body).then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          toast.success("Signed in successfully");

          sessionStorage["id"] = result.data.id;
          sessionStorage["firstName"] = result.data.firstName;
          sessionStorage["loginStatus"] = 1;

          // console.log(sessionStorage.id)
          // console.log(sessionStorage.firstName)
        } else {
          toast.error(result["error"]);
        }

        (result.data.role === "admin")? navigate("/trainDetails"):navigate("/searchingTrain")
        console.log(result);
      });
    }
  };

  return (
    <div className='background-img example'>

      <div className="container">
        <h1>Signin Here</h1>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="shadow p-3 mb-5 bg-body rounded">
                <label htmlFor="" className="label-control">
                  Email Id :
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="shadow p-3 mb-5 bg-body rounded">
                <label htmlFor="" className="label-contor">
                  Password :
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div>
                  Don't have an account ? <Link to="/signup"> Signup here</Link>
                </div>
                <div>
                  Forgot Password ? <Link to="/forgetPassword"> Click here to reset your password</Link>
                </div>
                <button
                  onClick={signinUser}
                  className="btn-primary"
                  style={{ borderRadius: "7px", marginTop: "10px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
