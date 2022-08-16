import React from "react";
import { useFormik } from "formik";
import { BiArrowBack } from "react-icons/bi";
import * as Yup from 'yup';
import "../Auth/register.css";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
const Login = () => {

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Field is Required"),

        password: Yup
          .string()
          .min(5)
          .matches(passwordRules, {
            message:
              "Please your password should contain atleast 1 upper case, 1 lower case and a number",
          })
          .required("Field is Required"),
      }),

      onSubmit: async (values,actions) => {
         await new Promise((resolve) => setTimeout(resolve , 1000));
    actions.resetForm();
    },
    });
  return (
    <section className="register__wrapper">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="form__control">
            <div className="controls">
              <h3>Login</h3>
              <button>
                <BiArrowBack />
              </button>
            </div>

            <div className="form__input">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password && formik.touched.password
                    ? "input-error"
                    : ""
                }
              />
              {formik.errors.password && formik.touched.password && (
                <p className="error">{formik.errors.password}</p>
              )}
            </div>

            <div className="form__input">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password && formik.touched.password
                    ? "input-error"
                    : ""
                }
              />
              {formik.errors.password && formik.touched.password && (
                <p className="error">{formik.errors.password}</p>
              )}
            </div>
            <div className="submit__btn">
              <button type="submit" disabled={formik.isSubmitting}>
                Login
              </button>
              <span>
                Not registerd?<a href="/signUp">Sign Up</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
