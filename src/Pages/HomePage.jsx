import styled from "styled-components";
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HeroBanner";
import SearchBar from "../Components/SearchBar";
import { useState, useEffect } from "react";
import { fetchExercises } from "../FetchData/excercise";
import { useQuery } from "react-query";

import BodyParts from "../Components/BodyParts";
import Excercises from "../Components/Excercises";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Main = styled.div`
  padding: 2px 5%;
  background-color: #fffafb;
`;

function HomePage() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <Main>
        <Navbar />
        <HeroBanner />
        <SearchBar
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
        <BodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Excercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Main>
      <Footer />
      
    </>
  );
}

export default HomePage;
