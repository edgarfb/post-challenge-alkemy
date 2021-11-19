import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    background: palevioletred;
    color: white;
    cursor: pointer;
  }
`;

function Btn(props) {
  return <Button {...props}>{props.name || props.children}</Button>;
}

export default Btn;
