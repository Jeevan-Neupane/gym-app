import { useQuery } from "react-query";
import { dataFetchBodyPart } from "../FetchData/bodyPart";
import BodyPart from "./BodyPart";
import { useContext } from "react";
import styled from "styled-components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import Loader from "./Loader";

const Button = styled.div`
  cursor: pointer;
  &:hover {
    transform: scaleX(1.1);
  }
`;

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Button>
  );
};

function BodyParts({ bodyPart, setBodyPart }) {
  const { isLoading, isError, data } = useQuery(
    ["bodyPart"],
    dataFetchBodyPart
  );

  if (isLoading) {
    return <Loader/>;
  }
  if (isError) {
    return <div>Error while Fetching Data</div>;
  }
  const newData=["all",...data];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {newData.map((item) => {
        return <BodyPart item={item} setBodyPart={setBodyPart} key={item}/>;
      })}
    </ScrollMenu>
  );
}

export default BodyParts;
