
import {Wheel,Cabin,Body, Input, WrapperContent, Label, Button, Link,   Text} from "./loginStyle"
import React from "react";
import { useNavigate } from "react-router-dom";
import { ApiConstants } from "../../api/ApiConstants";
import custom_axios from "../../axios/AxiosSetup";
import { toast } from "react-toastify";

const Login = () => {
let navigate = useNavigate();
  let email:any = React.useRef();
  let password:any = React.useRef();

  const loginApp = async () => {
    if (email.current.value == "" || password.current.value == "") {
      toast.info("Please fill the information");
      return;
    }
    try {
      const response = await custom_axios.post(ApiConstants.LOGIN, {
        email: email.current.value,
        password: password.current.value,
      });
      localStorage.setItem("token", response.data.token);
      dispatchEvent(new Event("storage"));
      navigate("/");
    } catch (error: any) {
      if (error.response.status == 401) toast.warn(error.response.data.message);
    }

    // navigate("/");
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
          <Text>L O G I N</Text>
        
        <div style={{display:'flex', width:'100%'}}>
          <Label >
          Email
          </Label>
          <Input 
          ref={email}
          name="email"
          v-model="form.email"
          type="email"
          placeholder="Email"/>
        </div>
        <div style={{marginTop:'40px',display:'flex',   width:'100%' }}> 
          <Label>Password</Label>
          <Input  
            ref={password}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.password"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
          />
        </div>
        
        <div style={{marginTop:'40px', width:'50%' ,display: 'flex',flexDirection:'column' , justifyContent:'space-between',alignItems:'center'}}>
          <Button onClick={loginApp} >
            Login
          </Button>
          <Link onClick={() => navigate("/signup")}>
            Sign Up
          </Link>
        </div>
      </WrapperContent>
      
      
    </Body>
  );
}

export default Login;
