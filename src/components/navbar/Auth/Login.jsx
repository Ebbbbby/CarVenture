import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "../Auth/register.css";
const Login = () => {
  return (
    <section className="register__wrapper">
      <div className="container">
        <form action="">
          <div className="form__control">
            <div className="controls">
              <h3>Login</h3>
              <button>
                <BiArrowBack />
              </button>
            </div>


            <div className="form__input">
              <label htmlFor="">Email</label>
              <input type="text" value="" />
            </div>

            <div className="form__input">
              <label htmlFor="">Password</label>
              <input type="text" value="" />
            </div>
            <div className="submit__btn">
              <button type="submit" value="">
               Login
              </button>
              <span>
                Not registerd?<a href="#">Sign Up</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
