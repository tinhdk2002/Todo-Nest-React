
import {Wheel,Cabin,Body, Input, WrapperContent, Label, Button, Link, Text} from "./signUpStyle"
import React from "react";
import { useNavigate } from "react-router-dom";
import { ApiConstants } from "../../api/ApiConstants";
import custom_axios from "../../axios/AxiosSetup";
import { toast } from "react-toastify";

const SignUp = () => {
  let navigate = useNavigate();
  let firstName: any = React.useRef();
  let lastName: any = React.useRef();
  let password: any = React.useRef();
  let confirmPassword: any = React.useRef();
  let email: any = React.useRef();

  const register = async () => {
    if (
      lastName.current.value == "" ||
      firstName.current.value == "" ||
      email.current.value == "" ||
      password.current.value == "" ||
      confirmPassword.current.value == "") {
      toast.info("Please fill the information");
      return;
    }
    if (password.current.value != confirmPassword.current.value) {
      toast.info("Password does not match!!!");
      return;
    }
    const response = await custom_axios.post(ApiConstants.USER.SIGN_UP, {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    });
    console.log(response.data);
    toast.success("Account Created Sucessfully!!!");
    navigate("/login");

  };

  return (
    <Body>
        
      <Wheel>
        <Cabin style={{
          "transform": "rotate(150deg)",
          "left": "12%",
           "top": "21%",
           }}></Cabin>
        <Cabin style={{
          "transform": "rotate(-33deg)",
          "right": "10%",
           "top": "78.5%",
           }}></Cabin>
        <Cabin style={{
          "transform": "rotate(24deg)",
          "right": "49%",
           "top": "82.5%",
           }}></Cabin>
        <Cabin style={{
          "transform": "rotate(90deg)",
          "left": "-2.5%",
           "top": "50%",
           }}></Cabin>
        <Cabin style={{
          "transform": "rotate(279deg)",
          "right": "-4.5%",
           "top": "50%",
           }}></Cabin>
        <Cabin style={{
          "transform": "rotate(200deg)",
          "right": "12%",
           "top": "21%",
           }}></Cabin>
      </Wheel>
      <WrapperContent style={{marginTop:'60px'}}>
      <Text>
          S I G N U P
        </Text>
        <div style={{display:'flex', width:'100%'}}>
          <div style={{display:'flex', width:'50%'}}>
            <Label >
            FirstName
            </Label>
            <Input 
            ref={firstName}
            id="firstName"
            type="text"
            placeholder="First Name"
            />
          </div>

          <div style={{display:'flex', width:'50%', marginLeft:'10px'}}>
            <Label >
            LastName
            </Label>
            <Input 
            ref={lastName}
            id="lastName"
            type="text"
            placeholder="Last Name"
            />
          </div>
        </div>
        <div style={{display:'flex', width:'100%', marginTop:'20px'}}>
          <Label >
          Email
          </Label>
          <Input 
          ref={email}
          id="email"
          type="email"
          placeholder="Email"/>
        </div>
        <div style={{display:'flex',justifyContent:"space-between", alignItems:"center", width:'100%'}}>
          <div style={{marginTop:'20px',display:'flex',   width:'50%' }}> 
            <Label>Password</Label>
            <Input  
              ref={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div style={{marginTop:'20px',display:'flex',   width:'50%',marginLeft:'10px'}}> 
            <Label>Confirm Password</Label>
            <Input  
              ref={confirmPassword}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="c_password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        
        <div style={{marginTop:'40px', width:'100%' ,display: 'flex',flexDirection:'column' , justifyContent:'space-between',alignItems:'center'}}>
          <Button onClick={register} >
             Register
          </Button>
          <Link onClick={() => navigate("/login")}>
            Already have an account? Login!
          </Link>
        </div>
      </WrapperContent>
      
      
    </Body>
  );
}

export default SignUp;
