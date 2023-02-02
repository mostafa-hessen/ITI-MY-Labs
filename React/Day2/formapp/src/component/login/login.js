import React from "react";
import { useState } from "react";

function Login() {
  let EmailRgex = /^[a-z]{3,}@gmail.com/gi;
  let PassRgex = /[a-z]{3,}[A-Z]{3,}\d{1,}[!\@\#\$\%\^\&\*\)\(+\=\._-]{1,}\S*$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container mt-5 p-3" style={{border:"1px dashed gold"}}>
    <form>
      <h3>login</h3>
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
          <button   type="submit" className="btn btn-primary  ">
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

export default Login;
