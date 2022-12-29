import React from 'react';
import styled from 'styled-components';

const Item = ({ description, id }) => {
  return (
    <StyledItem>
      <input type="checkbox" name={id} id={id} />
      <label htmlFor={id}>{description}</label>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;

  input[type='checkbox'] {
    width: 24px;
    height: 24px;
    display: block;

    &:checked + label {
      text-decoration: line-through;
    }
  }

  label {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    line-height: 22px;
  }
`;
