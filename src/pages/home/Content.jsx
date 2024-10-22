import styled from "styled-components";
import UserCard from "./UserCard";
import OneCard from "./OneCard";
import TwoCard from "./TwoCard";
import ThreeCard from "./ThreeCard";
import FourCard from "./FourCard";
import FiveCard from "./FiveCard";


const Wrapper = styled.div`
padding: 24px;
// max-height: calc(100vh-200px);
`;

const Content = () => {
  return (
    <Wrapper>
      <UserCard />
      <OneCard />
      <TwoCard />
      <ThreeCard/>
      <FourCard/>
      <FiveCard/>
    </Wrapper>
  )
}

export default Content
