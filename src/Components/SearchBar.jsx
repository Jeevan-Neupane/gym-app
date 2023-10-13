import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchExercises } from "../FetchData/excercise";

const Container = styled.form`
  margin-bottom: 5rem;
`;
const Heading = styled.h1`
  font-size: 4.4rem;
  text-align: center;
`;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchBars = styled.input`
  width: 60%;
  padding: 1.6rem 1.4rem;
  border-bottom-left-radius: 1rem;
  outline: none;
  border: 1px solid rgb(0, 0, 0, 0.3);
`;
const Button = styled.button`
  padding: 1.6rem 4rem;
  cursor: pointer;
  background-color: rgb(255, 38, 37);
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: #fff;
`;

function SearchBar({ setExercises, bodyPart }) {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery(["exercises"], fetchExercises);
 
  useEffect(()=>{

    if (data) {
      if (bodyPart === "all") {
        
        setExercises(data);
      } else {
       
        const bodyPartData = data.filter((item) => {
          return (
            item.name.toLowerCase().includes(bodyPart) ||
            item.target.toLowerCase().includes(bodyPart) ||
            item.equipment.toLowerCase().includes(bodyPart) ||
            item.bodyPart.toLowerCase().includes(bodyPart)
          );
        });
        setExercises(bodyPartData);
      }
    }
  },[bodyPart]);


  const handleChange = (events) => {
    setSearch(events.target.value);
  };

  const handleSubmit = (events) => {
    events.preventDefault();
    setSearch("");

    if (search) {
      const searchedExercises = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Heading>
        Awesome Exercises You <br /> Should Know
      </Heading>
      <SearchBarContainer>
        <SearchBars
          placeholder="Search Exercise"
          onChange={handleChange}
          value={search}
        />
        <Button>Search</Button>
      </SearchBarContainer>
    </Container>
  );
}

export default SearchBar;
