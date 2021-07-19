import React from "react";
import Card from "../Layout/Card";

const LoginPage = () => {

  const onEmailHandler = (event) => {
    event.preventDefault();
    
  }

  const onPasswordHandler = (event) => {
    event.preventDefault();
  }
  const onLoginHandler = (event,props) => {
    event.preventDefault();
    this.props.history.push('/welcome');

   
    
  };

  return (
    <Card>
      <form onSubmit={onLoginHandler}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Your e-mail"
            onChange={onEmailHandler}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Your password"
            onChange={onPasswordHandler}
            required
          />
        </div>
        <div className="text-center">
          <button
            className="mt-2 btn w-50 btn-dark text-light align-middle"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default LoginPage;
