import styled from "styled-components";
import HeroBannerImage from "../assets/images/banner.png";
import { labtop,tab } from "../Responsiveness/responsive";

const Container = styled.div`
  padding-top: 10rem;
  padding-left: 5rem;
`;

const TopText = styled.p`
  font-size: 2.6rem;
  color: #ff2625;
  font-weight: 600;
  margin-top: 10rem;
`;
const BigText = styled.p`
  font-size: 4.4rem;
  line-height: 1.5;
  font-weight: 700;
`;
const BottomText = styled.p`
  margin-top: 5rem;
  font-size: 2.2rem;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 5rem;
  height: 100vh;
  z-index: 2;
  ${labtop({
    display: "none",
  })}
`;

const Img = styled.img`
  height: 100%;
`;

const Button = styled.a`
  display: inline-block;
  padding: 14px;
  font-size: 2.2rem;
  background-color: rgb(255, 38, 37);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  border-radius: 1rem;
  margin-top: 5rem;
  text-decoration: none;
`;
const Exercise = styled.h1`
  /* text-align:center; */
  margin-top: 5rem;
  font-size: 20rem;
  color: rgb(255, 38, 37);
  opacity: 0.1;
  ${tab({
    fontSize:"12rem",
  })}
`;
function HeroBanner() {
  return (
    <Container>
      <TopText>Fitness Club</TopText>
      <BigText>
        Sweat, Smile
        <br /> And Repeat
      </BigText>
      <BottomText>
        Check out the most effective exercises personalized to you
      </BottomText>
      <Button href="#excercises">Explore Exercises</Button>
      <ImageContainer>
        <Img src={HeroBannerImage} alt="Hero Banner Image" />
      </ImageContainer>
      <Exercise>EXERCISE</Exercise>
    </Container>
  );
}

export default HeroBanner;
