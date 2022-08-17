import * as yup from "yup";
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
;

export const basicSchema = yup.object().shape({
  fullname: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field and must be more than 5 character long")
    .max(40)
    .min(6)
    .required("Required"),

  email: yup
    .string()
    .email("please enter a valid email")
    .required("Field is Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Please your password should contain atleast 1 upper case, 1 lower case and a number"
    })
    .required("Field is Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Field is required "),
});



