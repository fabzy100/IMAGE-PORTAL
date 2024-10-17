import styled from "styled-components"
import Button from "../../component/Button";

const Wrapper = styled.div`
padding: 24px;
display: flex;
gap: 24px;
height: 100px;
`;



const ActionCenter = ({ setOpenCreateModal } ) => { //passing setopenmodal as a parameter to be able to use as a function for button 
  return (
    <div>
      <Wrapper>
      <Button text="Create" onClick={() => setOpenCreateModal(true)} />   
      {/* using the setopenmodal here as true to be able to open modal */}
      <Button text="Refresh" />
      </Wrapper>
    </div>
  )
}

export default ActionCenter;
