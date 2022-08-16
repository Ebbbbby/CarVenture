import React from "react";
import { useFormik } from "formik";
import { BiArrowBack } from "react-icons/bi";
import "../Auth/register.css";
import { basicSchema } from "../../../schemas";



const onSubmit = async (values, actions)=>{
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve , 1000));
    actions.resetForm();



};
const Register = () => {
  const {values,errors, handleBlur, handleChange, isSubmitting, touched, handleSubmit }= useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema:basicSchema,onSubmit
  });
  console.log(errors)

  return (
    <section className="register__wrapper">
      <div className="container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form__control">
            <div className="controls">
              <h3>Register</h3>
              <button>
                <BiArrowBack />
              </button>
            </div>
            <div className="form__input">
              <label htmlFor="fullname">Full name</label>
              <input
                placeholder="Enter Full name"
                type="text"
                value={values.fullname}
                onChange={handleChange}
                id="fullname"
                name="fullname"
                onBlur={handleBlur}
                className={
                  errors.fullname && touched.fullname ? "input-error" : ""
                }
              />
              {errors.fullname && touched.fullname && (
                <p className="error">{errors.fullname}</p>
              )}
            </div>

            <div className="form__input">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                id="email"
                name="email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="form__input">
              <label htmlFor="">Password</label>
              <input
                placeholder="Enter Password"
                type="text"
                value={values.password}
                onChange={handleChange}
                id="password"
                name="password"
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <div className="form__input">
              <label htmlFor="confirm password">Confirm password</label>
              <input
                placeholder="Confirm Password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                name="confirmPassword"
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="submit__btn">
              <button type="submit" value="" disabled ={isSubmitting}>
                Register
              </button>
              <span>
                Already registered? <a href="/signUp">Sign in</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
