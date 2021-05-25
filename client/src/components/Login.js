import React, { useState } from "react";
import styled from "styled-components";

const initialValue = {
  email: "",
  password: "",
};

export default function Login() {
  const [loginData, setLoginData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <div className="form__input__group">
          <h1>Login</h1>
          <label htmlFor="email" className="form__input__label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form__input"
            onChange={handleChange}
            value={loginData.email}
          />
        </div>
        <div className="form__input__group">
          <label htmlFor="password" className="form__input__label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form__input"
            onChange={handleChange}
            value={loginData.password}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </LoginForm>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-blue);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  background: var(--blue);
  color: var(--white);
  width: 40%;
  height: 50%;
  h1 {
    margin-bottom: 1rem;
  }
  .form__input__group {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      margin: 0.5rem 0;
    }
    input {
      flex: 1;
      border: none;
      padding: 0.5rem;
    }
  }
  button {
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    font-weight: bold;
    background: var(--orange);
    width: 40%;
  }
  &,
  input,
  button {
    border-radius: 0.2rem;
  }
`;
