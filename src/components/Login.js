import React, { useEffect, useState } from "react";
import { validate } from "../helpers/validate";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helpers/toast";

import "./signup.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
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
      notify("You Sign in seccussfuly", "success");
    } else {
      setTouched({
        email: true,
        password: true,
      });
      notify("Invalid Data", "error");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="form rounded-3xl text-center bg-zinc-400 flex flex-col items-center gap-2 "
    >
      <h2 className="m-6 font-bold text-4xl">Login</h2>

      <div className="flex flex-col w-1/2 items-start mx-auto mb-4 input__container mt-24">
        <label className="text-gray-800 label">Email</label>
        <input
          type={"text"}
          name="email"
          value={data.email}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.email && touched.email && (
          <span className="error__msg">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col w-1/2 items-start mx-auto mb-4 input__container">
        <label className="text-gray-800 label">Password</label>
        <input
          type={"password"}
          name="password"
          value={data.password}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.password && touched.password && (
          <span className="error__msg">{errors.password}</span>
        )}
      </div>

      <div className="mt-4">
        <Link
          to={"/signup"}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 mr-4 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Signup
        </Link>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded"
        >
          Login
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;
