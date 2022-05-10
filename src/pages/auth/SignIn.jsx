import React, { useState } from "react";
import styled from "styled-components";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const SignIn = (props) => {
  const {Sign_In, user} = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const { email, password, showPassword } = formData;

  const navigate = useNavigate();


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      // toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        password,
      };
      console.log(userData);
    Sign_In(userData)
    }
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

       if (user) {
       
         navigate("/");
       } 

  return (
    <Cont>
      <Wrap>
        <h3 className="heading">Sign In</h3>

        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                onChange={onChange}
                value={email}
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                onChange={onChange}
                value={password}
              />
              <div
                className="show"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <p>{showPassword ? <HiEyeOff /> : <HiEye />}</p>
              </div>
            </InputField>
          </FormControl>
          {/* <Cta> */}
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {/* </Cta> */}
        </Form>
        <div className="link">
          <p>
            Don't have an Account? <Link to="/sign-up">Sign Up</Link>{" "}
          </p>
         
        </div>
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 15vh 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
`;
const Wrap = styled.div`
  /* p  */
  width: 50%;
  margin: auto;
  /* From https://css.glass */

  background: rgba(255, 255, 255, 0.18);
  /* border-radius: 16px; */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(3.3px);
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  .heading {
    margin-bottom: 20px;
    font-size: 30px;
    color: var(--white);
  }

  .link {
    margin: 20px 0;
    display: grid;
    gap: 10px;
  }
`;
const Form = styled.form`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  button {
    width: 100%;
    padding: 20px 10px;
    border-radius: 8px;
    outline: none;
    border: none;
  }
`;
const FormControl = styled.div`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;
const InputField = styled.div`
  /* p  */
  width: 100%;
  position: relative;

  .show {
    position: absolute;
    right: 20px;
    bottom: 13px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    border-radius: 50px;

    &:hover {
      background: #f2f2f2;
    }
  }
`;

export default SignIn;
