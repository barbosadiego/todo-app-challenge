import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import All from './views/All';
import Active from './views/Active';
import Completed from './views/Completed';

const App = () => {
  return (
    <StyledHome>
      <Title>#todo</Title>
      <ViewsLink>
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </ViewsLink>
      <main>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/active" element={<Active />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </main>
      <Footer>
        <p>created by Diego Barbosa - devChallenges.io</p>
      </Footer>
    </StyledHome>
  );
};

export default App;

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 100vh;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }

  main {
    flex: 1;
  }
`;

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

const ViewsLink = styled.div`
  display: flex;
  justify-content: space-around;

  & a {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: black;
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: rgba(169, 169, 169, 1);
`;
