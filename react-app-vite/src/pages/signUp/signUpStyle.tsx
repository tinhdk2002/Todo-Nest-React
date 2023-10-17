
import styled from "styled-components";
import QSage from "../../assets/img/QSage.webp" 
import Sage from "../../assets/img/Sage.jpg" 

export const Body = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  position:relative;
  overflow:hidden;
  background: url(${Sage}) no-repeat center /100% 100%;
`

export const Text = styled.h1`
  font-size: 40px;
  background: -webkit-linear-gradient(180deg,#ed0000, #ffe10a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position:absolute;
  top:20px;
  z-index:1;
`

export const Wheel = styled.div`
  border: 3px dashed white;
  border-radius: 50%;
  width: 550px;
  height: 550px;
  min-width: 550px;
  min-height: 550px;
  animation: wheel 10s linear infinite;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color: rgba(77, 62, 62,0.9);
  position:absolute;
  @keyframes wheel {
    0%{
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;

export const Cabin = styled.div`
  background: url(${QSage}) no-repeat center ;
  margin:0;
  background-size:100% 100%;
  height: 142px;
  width: 183px;
  background-size: 90px;
  position: absolute;
  transform-origin: 50% 0%;
`


export const WrapperContent = styled.div `
  position:absolute;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  flex-wrap : wrap;
  width: 460px;
  height: 550px;
  color:white;
`

export const Label = styled.label`
  display:block;
  color:White;
  font-weight:700;
  font-size:16px;
  width:80px;
`

export const Input = styled.input`
  height:30px;
  width:130px;
  flex:1;
  border-radius:10px;
  font-size:20px;
  padding-left:10px;
  color:black;
  &:focus {
    outline:none;
    border:aqua 3px solid;
    padding:0;
  }
`

export const Button = styled.button`
  height:40px;
  width:150px;
  border-radius:10px;
  font-size:20px;
  font-weight:600;
  color:yellow;
  background: linear-gradient(90deg, aqua 50%, white);
  padding:0;
  &:hover {
    opacity:0.8;
    color:yellow;
    cursor:pointer;
   border:aqua 1px solid;
  } 
`

export const Link = styled.a`
  margin-top:20px;
  color:blue;
  font-weight:500;
  &:hover {
    color:aqua;
    cursor: pointer;
  }
`