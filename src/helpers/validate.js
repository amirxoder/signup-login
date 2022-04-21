const validate = (data, type) => {
  const errors = {};

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Username is Requaired";
    } else {
      delete errors.name;
    }

    if (!data.email) {
      errors.email = "Email is Requaired";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Email is Invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is Required";
    } else if (data.password.length < 6) {
      errors.password = "Password need to be 6 char or more";
    } else {
      delete errors.password;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Please Confirm your password";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Password do not matched";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  } else {
    if (!data.email) {
      errors.email = "Email is Requaired";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Email is Invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is Required";
    } else if (data.password.length < 6) {
      errors.password = "Password need to be 6 char or more";
    } else {
      delete errors.password;
    }
  }
  return errors;
};

export { validate };
