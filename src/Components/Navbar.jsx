import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Main = styled.div`
  padding: 1rem;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;


const Left = styled.div`
display:flex;
gap:2rem;
`;

const Img = styled.img`
width:5rem;
height:5rem;


`;

const NavItems=styled.a`
font-size:3rem;
text-decoration: none;
color:#af1de8;



  
`

function Navbar() {
  const styleLink=({isActive})=>{
    return {
      fontSize:"3rem",
      textDecoration:"none",
      color:isActive?"#af1de8":"",
      fontWeight:isActive?"700":"",
      
    }
  }
  return (
    <Main>
      <Nav>
        <NavLink to="/">
          <Img src={Logo} alt="Gym Logo" />
        </NavLink>

        <Left>
          <NavLink style={styleLink} >Home</NavLink>
          <NavItems href="#excercises">Excercise</NavItems>
        </Left>
      </Nav>
    </Main>
  );
}

export default Navbar;
