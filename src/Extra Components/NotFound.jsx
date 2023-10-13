import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
`;
const Span=styled.span`

margin-left: 1rem;
    
`

function NotFound() {
  return (
    <Container>
      Page Not Found.Go to{" "}
      <Span>
        <Link to="/" style={{}}> Home</Link>
      </Span>
    </Container>
  );
}

export default NotFound;
