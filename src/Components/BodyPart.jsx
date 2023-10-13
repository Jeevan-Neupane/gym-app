import styled from "styled-components";
import Icon from '../assets/icons/gym.png';

const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
&:hover{
    transform: scale(1.1);
}
transition: all .2s ease-in-out;
cursor: pointer;
height:280px;
width:280px;
    
`
const Img=styled.img`
height:10rem;
width:10rem;
    
`

const Text=styled.p`
font-size:2.4rem;
font-weight: 500;
text-transform: capitalize;
    
`


function BodyPart({item,setBodyPart}) {
   
  return (
    <Container onClick={()=>{setBodyPart(item)}} >
     <Img src={Icon}/>
     <Text>{item}</Text>
    </Container>
  )
}

export default BodyPart
