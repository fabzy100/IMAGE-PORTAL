import styled from "styled-components";//importing styled component for styling
import { CiHeart } from "react-icons/ci";

const Wrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 24px;
  height: 300px;
  display: flex;
  flex-direction: column;

 .profilePicture {
  height: 70%;
  width: 100%;
  border-radius: 8px 8px 0 0;


  img{
  height: 100%;
  width:  100%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  }
 }
  .content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .contentItem {
    display: flex;
    gap: 16px;

  .userName {
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  }
  }
  .likeContainer{
  width: 20px;
  height: 20px;

  svg {
  width: 100%;
  height: 100%;
  }
  }
  }

`;

const OneCard = () => {
  return (
    <Wrapper>
      <div className="profilePicture">
        <img src="./img/movie-1.PNG" alt="" />
        
      </div>

      <div className="content">
        <div className="contentItem">
        <p className="userName">Jp Hudderson's Library</p>
        </div>
        <div className="contentItem">
        <p>Download your latest <span> Fictional Collections</span> </p>
        </div>
        <div className="likeContainer">
        <CiHeart />
        </div>
      </div>
    </Wrapper>
  )
}

export default OneCard;
