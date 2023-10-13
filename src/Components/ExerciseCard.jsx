import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile,tab } from "../Responsiveness/responsive";

const Image = styled.img``;
const CardContainer = styled.div`
 
  width: 350px;
  height: 440px;
  background: #fff;
  border-top: 0.4rem solid #ff2625;
  border-bottom-left-radius: 2rem;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 1rem;
  transform: scale(1, 1);
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  ${mobile({
    width:"100%",
    height:"500px",
    
    

  })}

  
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  color: #fff;
  text-transform: capitalize;
  border-radius: 2rem;
  font-size: 1.4rem;
  background-color: ${(props) => (props.target ? "#fcc757" : "#ffa9a9")};
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 2rem;
  padding: 0.5rem 1rem;
`;

const Name = styled.p`
  color: #000;
  font-size: 2.4rem;
  text-transform: capitalize;
  font-weight: 500;
`;

function ExerciseCard({ exercise }) {
  return (
    <CardContainer>
      <Image src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <ButtonContainer>
        <Button>{exercise.bodyPart}</Button>
        <Button target>{exercise.target}</Button>
      </ButtonContainer>
      <Name>{exercise.name}</Name>
    </CardContainer>
  );
}

export default ExerciseCard;
