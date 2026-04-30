import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnimalName = styled.strong`
  width: 5rem;
`;

export default function Counter({  animal, onUpdateCount }) {
 
  return (
    <Container>
      <AnimalName>{animal.name}:</AnimalName>
      <button type="button" onClick={() => onUpdateCount(animal.id, -1)}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{animal.count}</span>
      <button type="button" onClick={() => onUpdateCount(animal.id, +1)}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}
