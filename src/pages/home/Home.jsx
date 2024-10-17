import styled from "styled-components";
import AppHeader from "./AppHeader";
import Content from "./Content";
import ActionCenter from "./ActionCenter";
import { useState } from "react";
import CreateModal from "./CreateModal";

const Wrapper = styled.div`
  background: #fff;
  width: 25%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;

  .header {
    position: sticky;
    top: 0;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Home = () => {
  // Defining modal state without TypeScript type annotation
  const [openCreateModal, setOpenCreateModal] = useState(false); // Removed :boolean annotation

  return (
    <Wrapper>
      <div className="header">
        <AppHeader />
        <ActionCenter setOpenCreateModal={setOpenCreateModal} />
      </div>
      <Content />
      {openCreateModal && (
        <CreateModal setOpenCreateModal={setOpenCreateModal} />
      )}
    </Wrapper>
  );
};

export default Home;
