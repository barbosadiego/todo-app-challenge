import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import All from './views/All';
import Active from './views/Active';
import Completed from './views/Completed';

const App = () => {
  return (
    <>
      <Title>#todo</Title>
      <div>
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
};

export default App;

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;
