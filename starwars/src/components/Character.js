// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  background-color: yellow;
  font-size: 1.8rem;
  width: 50%;
  margin: 2.5% auto;
`;

const Character = (props) => {
  return (
    <StyledDiv key={props.character.id}>
      <h2>{props.character.name}</h2>
      <p>{props.character.status}</p>
      <img src={props.character.image} alt="character" />
    </StyledDiv>
  );
};

export default Character;
