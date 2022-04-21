import React, { useEffect, useState } from "react";
import { validate } from "../helpers/validate";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
      // console.log(event.target.checked);
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
      // console.log(event.target.value);
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>SignUp</h2>
      <div>
        <label>Name</label>
        <input
          type={"text"}
          name="name"
          value={data.name}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.name && touched.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type={"text"}
          name="email"
          value={data.email}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.email && touched.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type={"password"}
          name="password"
          value={data.password}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.password && touched.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type={"password"}
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <span>{errors.confirmPassword}</span>
        )}
      </div>

      <div>
        <label>I accept terms of privacy policy</label>
        <input
          type={"checkbox"}
          name="isAccepted"
          value={data.isAccepted}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.isAccepted && touched.isAccepted && (
          <span>{errors.isAccepted}</span>
        )}
      </div>

      <div>
        <a href="/">Login</a>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default Signup;
