import React from "react";
import { useState } from "react";

function Register() {
  let EmailRgex = /^[a-z]{3,}@gmail.com/gi;
  let PassRgex = /[a-z]{3,}[A-Z]{3,}\d{1,}[!\@\#\$\%\^\&\*\)\(+\=\._-]{1,}\S*$/;
  let userNameRgex =/^\S*$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState(" ");
  const [userName, setuserName] = useState(" ");
  return (
    <div className="container mt-5 p-5" style={{border:"1px dashed red"}}>
      <form>
        <h3>signUP</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <div id="emailHelp" className="form-text">
            {!email.match(EmailRgex) ? (
              <span className="text-danger">
                your email must be as mnd@gmail.com{" "}
              </span>
            ) : (
              <span className="text-success">nice job</span>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="name"
            required
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputPassword3" className="form-label">
            User Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputPassword3"
            // minLength={8}
            onChange={(e) => setuserName(e.target.value)}
          />
          {!userName.match(userNameRgex) ? (
            <span className="text-danger">
              your userName must havn't any space
            </span>
          ) : (
            <span className="text-success">nice job</span>
          )}
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!password.match(PassRgex) ? (
            <span className="text-danger">
              your password must be as pppPPP1%{" "}
            </span>
          ) : (
            <span className="text-success">nice job</span>
          )}
        </div>



        <div className="mb-3">
          <label htmlFor="exampleInputPassword4" className="form-label">
           confirm Password
          </label>
          <input
            required
            type="password"
            className="form-control"
            id="exampleInputPassword4"
            minLength={8}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          {confirmpassword==password ? (
            <span className="text-success">
              your password was matched
            </span>
          ) : (
            <span className="text-danger">password not matched</span>
          )}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        {password.match(PassRgex) && email.match(EmailRgex) ? (
          <button type="submit" className="btn btn-primary  ">
            Submit
          </button>
        ) : (
          <button disabled type="submit" className="btn btn-primary   ">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Register;
