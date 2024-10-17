import styled from "styled-components";

// Styled component for button
const Wrapper = styled.button`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bg || "#403234"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: 12px 24px;
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.borderColor || "none"}`};
`;

// Button component
const Button = ({
  text,
  onClick,
  bg,
  color,
  width,
  borderColor,
  height,
  type = "button", // Default type to "button"
}) => {
  return (
    <Wrapper
      bg={bg}
      color={color}
      width={width}
      borderColor={borderColor}
      height={height}
      onClick={onClick}
      type={type}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
