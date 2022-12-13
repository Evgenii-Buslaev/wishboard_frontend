const loginValidate = (user) => {
  const { name, password } = user;
  return name && password;
};

export { loginValidate };
