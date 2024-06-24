//Ui
import ButtonUi from "../../Ui/Button";
import Input from "../../Ui/Input";

//react
import { useState } from "react";

// react router dom
import { useNavigate } from "react-router-dom"; 

// resources
// import upload from "../../resources/upload-Outlined.png";

//flowbite-react
import {Button} from 'flowbite-react'
//react cookies
import {useCookies} from "react-cookie"

//icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

import axios from "axios"
import { Link } from "react-router-dom";

const PasswordStrengthIndicator = ({ strength }) => {
  return (
    <div className="">
      {/* <p>Password Strength:</p> */}
      <ul className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]">
        <li style={{ color: strength.isValidLength ? "green" : "red" }}>
          Minimum 8 characters
        </li>
        <li style={{ color: strength.hasUpperCase ? "green" : "red" }}>
          Contains uppercase letter
        </li>
        <li style={{ color: strength.hasLowerCase ? "green" : "red" }}>
          Contains lowercase letter
        </li>
        <li style={{ color: strength.hasNumber ? "green" : "red" }}>
          Contains number
        </li>
        <li style={{ color: strength.hasSpecialChar ? "green" : "red" }}>
          Contains special character
        </li>
      </ul>
    </div>
  );
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [showStrength, setShowStrength] = useState(false);
  const [isPassStrong, setPassStrong] = useState("");
  const [shadowowPassMatch, setShowPassMatch] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [passType, setPassType] = useState("text");
  const [emailError, setEmailError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate()

  const [cookies,setCookies] = useCookies(['token']);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name == "password") {
      const strength = checkPasswordStrenght(value);
      return setPassStrong(strength);
    } else {
       setShowStrength(false);
    }
    setShowStrength(true);
    if (name == "confirmPass") {
      if (value == formData.password) {
        console.log("value:",value," passowrd:",formData.password)
        return setShowPassMatch(false);
      } else {
        return setShowPassMatch(true);
      }
    }
    if(name == "email"){
      const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(value);
      console.log(validEmail)
      validEmail? setEmailError(false):setEmailError(true)
      return
    }
    if(name == "lastName" || name == "firstName"){
      console.log("name")
      if(value.trim() == " " ){

        setShowNameError(true)
      }
    }
    
    // console.log(formData);
  };

  const checkPasswordStrenght = (pass) => {
    const minLenght = 8;
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass);

    const isValidLength = pass.length >= minLenght;
    // console.log(hasUpperCase, pass);
    return {
      isValidLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
      isStrong:
        isValidLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar,
    };
  };

  const hidePassHandler = () => {
    setHidePass(!hidePass);
   
   
  };
  const onSubmit = async() => {
    // console.log('c')
    setShowStrength(checkPasswordStrenght(formData.password));
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(formData.email);
    if(!validEmail){
      setEmailError(true)
    }else{
      setEmailError(false)
    }
    if(!showNameError){
      console.log("name")
      setShowNameError(true)
    }
    // console.log(setShowStrength+" "+shadowowPassMatch+" "+emailError)
    if (showStrength && !shadowowPassMatch && !emailError  ) {
      //send data to backend
      setShowNameError(false)
      try{
        setBtnDisabled(true)
        const response = await axios.post('http://localhost:8080/sign-up', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }, {
          withCredentials: true,
        });
        // const token = response.data.token;
        // setCookies("token",token,) // dont need 
        // navigate("/")
        
        console.log(response.data)
      }catch (error){
        if(error.response){
          console.log('Error response:', error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.log('Error request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error message:', error.message);
        }
        console.log('Error config:', error.config);
      } finally {
        setBtnDisabled(false)
      }

      
      // console.log("Submit");
      // console.log(formData);
    }
    
  };

  return (
    <div className="h-[100vh] flex  items-center ">
      <div className="px-10 py-8 m-auto md:flex-[0.3] rounded-lg md:shadow-[0px_0px_20px_1px_#00000024] ">
        <h1 className=" text-center text-3xl tracking-wide font-medium">
          Create a MediaKit Account
        </h1>
        <p className="md:px-12 mt-3 w-full text-center text-slate-600 text-md">
          Sign Up and get access to all the features of MediaKit
        </p>

        {/* Inputs */}
        <div className="pt-10  w-full bg-white">
          <div className="flex justify-between">
            <div className="w-[48%] flex flex-col">
              <div className=" flex justify-between">
                {/* <label className=" text-xl font-[400]">First Name</label> */}
                {/* <div className=" px-2 pt-1 rounded bg-red-200 text-sm text-center text-red-500">
                required
              </div> */}
              </div>
              <Input
                onChange={inputHandler}
                name={"firstName"}
                text={"First Name"}
                styles="w-[100%]"
              />
            </div>
            <div className="w-[48%] flex flex-col">
              {/* <label className="mb-2 text-xl font-[400]">Last Name</label> */}
              <Input
                onChange={inputHandler}
                name={"lastName"}
                text={"Last Name"}
                styles="w-[100%]"
              />
            </div>
          </div>
            {showNameError && <p className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]" style={{ color: "red" }}>Please Enter Your Name</p>}
          <div className="mt-4 flex flex-col">
            {/* <label for="required-email" class="text-gray-700">
            Email
            <span class="text-red-500 required-dot">*</span>
          </label> */}
            <Input
              onChange={inputHandler}
              name={"email"}
              text={"JohnDoe@gmail.com"}
              type="email"
            />
            {emailError && <p className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]" style={{ color: "red" }}>Email is invalid</p>}
          </div>
          <div class="mt-4  relative ">
            <label
              for="required-email"
              class=" text-[14px] font-medium text-secondaryblack"
            >
              {"Password"}
              <span class="text-red-500 required-dot">*</span>
            </label>
            <div className="flex items-center mt-2 rounded-lg flex-1 appearance-none border border-gray-300 w-full  px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <input
                type={hidePass? 'text' :'password'}
                id="required-email"
                class="border-none w-full placeholder:text-gray-400"
                name={"password"}
                placeholder={"Password"}
                onChange={inputHandler}
              />
              {hidePass ? (
                <FaEye onClick={hidePassHandler} className="mx-2 text-2xl" />
              ) : (
                <FaEyeSlash
                  onClick={hidePassHandler}
                  className="mx-2 text-2xl"
                />
              )}
            </div>
          </div>
          {showStrength ? (
            <PasswordStrengthIndicator strength={isPassStrong} />
          ) : (
            ""
          )}
          <div className="mt-4 flex flex-col">
            {/* <label className="mb-2 text-xl font-[400]">Confirm Password</label> */}
            <Input
              onChange={inputHandler}
              name={"confirmPass"}
              type={"password"}
              text={"Confirm Pass"}
            />
          </div>

          {shadowowPassMatch && (
            <p className="ml-4 mt-1 font-medium text-[0.75rem] leading-[1.66]" style={{ color: "red" }}>Passwords do not match</p>
          )}
          {/* // button */}
          {/* <Link to={"/DashBoard"}> */}
            {btnDisabled?<Button isProcessing className='w-fit mt-10 text-white bg-primary rounded-full cursor-none opacity-25 '>Submit</Button> :            <ButtonUi
              style={`mt-10   bg-primary border-inherit text-white cursor-pointer `}
              text="Submit"
              onclick={onSubmit}
              disbaled={btnDisabled}
            />}

            
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
