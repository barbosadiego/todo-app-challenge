import React from 'react';
import styled from 'styled-components';
import { Routes, Route, NavLink } from 'react-router-dom';
import All from './views/All';
import Active from './views/Active';
import Completed from './views/Completed';

const App = () => {
  return (
    <StyledHome>
      <Title>#todo</Title>
      <ViewsLink>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/active">Active</NavLink>
        </li>
        <li>
          <NavLink to="/completed">Completed</NavLink>
        </li>
      </ViewsLink>
      <main>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/active" element={<Active />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </main>
      <Footer>
        <p>
          created by <span>Diego Barbosa</span> - devChallenges.io
        </p>
      </Footer>
    </StyledHome>
  );
};

export default App;

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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
  margin-bottom: 30px;
`;

const ViewsLink = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
  padding-bottom: 18px;

  & li {
    list-style: none;
    padding: 0;
    text-align: center;
    transition: all 0.3s;
  }

  & a {
    display: inline-block;
    width: 120px;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: black;
    position: relative;
    border-bottom: 4px solid transparent;

    &::after {
      content: '';
      transition: all 0.3s;
      top: 36px;
      left: 0;
      border-bottom: 4px solid transparent;
      max-width: 120px;
      width: 100%;
      border-radius: 4px 4px 0px 0px;
      position: absolute;
      display: block;
    }

    &.active::after {
      border-bottom-color: rgba(47, 128, 237, 1);
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: rgba(169, 169, 169, 1);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;

  span {
    font-weight: 700;
  }
`;
