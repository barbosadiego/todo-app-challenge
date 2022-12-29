import React from 'react';
import styled from 'styled-components';

const Input = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <StyledInput onSubmit={handleSubmit}>
      <input type="text" placeholder="add details" />
      <button type="submit">Add</button>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.form`
  display: flex;
  gap: 25px;
  margin-bottom: 33px;

  input {
    flex: 1;
    min-width: 150px;
    height: 60px;
    border: 1px solid rgba(189, 189, 189, 1);
    border-radius: 12px;
    outline: none;
    padding: 12px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    width: 100px;
    border: none;
    background-color: rgba(47, 128, 237, 1);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height: 17px;
    border-radius: 12px;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  }
`;
