import React from "react";
import { Form, Link, useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  console.log(isLogin);
  return (
    <section className="form-section">
      <p>{isLogin ? "Login to your account" : "Create new account"}</p>
      <Form method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button className="btn login-btn">
          {isLogin ? "login" : " Register"}
        </button>
      </Form>
      <p className="create-acc">
        {isLogin ? (
          <Link to={"/auth?mode=signup"}>
            Dont have an account ? <span>Create Account</span>
          </Link>
        ) : (
          <Link to={"/auth?mode=login"}>
            Already have an account ? <span>Login Account</span>
          </Link>
        )}
      </p>
    </section>
  );
};

export default AuthForm;
