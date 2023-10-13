import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
import ExerciseCard from "./ExerciseCard";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchExercises } from "../FetchData/excercise";
import { tab } from "../Responsiveness/responsive";
import Loader from "./Loader";

const Box = styled.div`
  margin-top: 5rem;
  padding: 2rem;
`;

const Heading = styled.h3`
  margin-bottom: 4.6rem;
  font-size: 3rem;
`;

const Conatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 11rem;
  ${tab({
    gap:"5rem",
    
  })}
  
`;

const PaginationContainer = styled.div`
  margin-top: 10rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;

function Excercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError,isFetching } = useQuery(["exercises"], fetchExercises);
  useEffect(()=>{
    if(data){
      setExercises(data);
    }

  },[data]);
  if(isLoading || isFetching){
    return <Loader/>
  }

  const exercisesPerPage = 9;
  const Paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <Box id="excercises">
      <Heading>Showing Result</Heading>
      <Conatiner>
        {currentExercises.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Conatiner>
      <PaginationContainer>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          />
        )}
      </PaginationContainer>
    </Box>
  );
}

export default Excercises;
