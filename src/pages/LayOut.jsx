import React from 'react'
import Navbar from '../components/Navbar';
import styled from "styled-components";

const LayOut = ({children}) => {
  return (
      <Cont>
          <Navbar />
          <Pages>
              {children}
          </Pages>
          
    </Cont>
  )
}

const Cont = styled.div`
//
`;
const Pages = styled.div`
padding-top: 10vh;
`;

export default LayOut