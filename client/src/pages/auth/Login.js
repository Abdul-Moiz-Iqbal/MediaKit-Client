import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import Input from '../../Ui/Input'; // Assuming you have an Input component
import ButtonUi from '../../Ui/Button'; // Assuming you have a Button component

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [hidePass, setHidePass] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(['token']);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(value);
      validEmail ? setEmailError(false) : setEmailError(true);
    }

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value === "",
    }));
  };

  const hidePassHandler = () => {
    setHidePass(!hidePass);
  };

  const validateFields = () => {
    const errors = {};
    if (formData.email === "") errors.email = "Email is required";
    if (formData.password === "") errors.password = "Password is required";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async () => {
    if (!validateFields()) return;

    if (emailError) return;

    try {
      setBtnDisabled(true);
      const response = await axios.post('http://localhost:8080/sign-in', {
        email: formData.email,
        password: formData.password,
      }, {
        withCredentials: true,
      });
      console.log(response)
      if(response.statusText === 'OK'){

        navigate("/"); // Redirect to dashboard or any other page on successful login
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        setFieldErrors({ general: data.message || "Email or password incorrect" });
      } else if (error.request) {
        console.log('Error request:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
    } finally {
      setBtnDisabled(false);
    }
  };

  return (
    <div className="h-[100vh] flex items-center">
      <div className="px-10 py-8 m-auto flex-[0.8 ] md:flex-[0.5] rounded-lg md:shadow-[0px_0px_20px_1px_#00000024] bg-white">
        <h1 className="text-center text-3xl tracking-wide font-medium">
          Welcome Back
        </h1>
        <p className="md:px-12 mt-3 w-full text-center text-slate-600 text-md">
          Login to access your MediaKit account
        </p>

        {/* Inputs */}
        <div className="pt-10 w-full">
          <div className="mt-4 flex flex-col">
            <Input
              onChange={inputHandler}
              name={"email"}
              text={"Email"}
              type="email"
              value={formData.email}
            />
            {fieldErrors.email && (
              <p className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]" style={{ color: "red" }}>
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div className="mt-4 relative">
            <label htmlFor="required-password" className="text-[14px] font-medium text-secondaryblack">
              Password
              <span className="text-red-500 required-dot">*</span>
            </label>
            <div className="flex items-center mt-2 rounded-lg flex-1 appearance-none border border-gray-300 w-full px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <input
                type={hidePass ? 'text' : 'password'}
                id="required-password"
                className="border-none w-full placeholder:text-gray-400"
                name={"password"}
                placeholder={"Password"}
                onChange={inputHandler}
                value={formData.password}
              />
              {hidePass ? (
                <FaEye onClick={hidePassHandler} className="mx-2 text-2xl" />
              ) : (
                <FaEyeSlash onClick={hidePassHandler} className="mx-2 text-2xl" />
              )}
            </div>
            {fieldErrors.password && (
              <p className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]" style={{ color: "red" }}>
                {fieldErrors.password}
              </p>
            )}
          </div>

          {fieldErrors.general && (
            <p className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]" style={{ color: "red" }}>
              {fieldErrors.general}
            </p>
          )}

          <div className="flex justify-between items-center mt-4">
            <Link to="/forgot-password" className="text-sm text-primary">
              Forgot Password?
            </Link>
          </div>

          {btnDisabled ? (
            <Button isProcessing className='w-fit mt-10 text-white bg-primary rounded-full cursor-none opacity-25'>
              Logging in...
            </Button>
          ) : (
            <ButtonUi
              style="mt-4 bg-primary border-inherit text-white cursor-pointer"
              text="Login"
              onclick={onSubmit}
              disabled={btnDisabled}
            />
          )}

          <p className="mt-4 text-sm">
            Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
