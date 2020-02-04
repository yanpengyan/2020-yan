import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const FooterBox = styled.div`
 display:flex;
 height: 100%;
 a {
   flex:1;
   display:flex;
   justify-content: center;
   align-items: center;
 } 
 .active {
   color: pink;
 }
`;
const Footer = (props) => {
 
    return (
     <FooterBox>
  <NavLink to='/home/bussiness'>首页</NavLink>
        <NavLink to='/home/order'>订单</NavLink>
        <NavLink to='/home/mine'>我的</NavLink>
     </FooterBox>
      
 
    )
  
}
export default Footer;