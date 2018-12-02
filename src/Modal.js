import React, {Component} from 'react';
import styled from 'styled-components';

const ModalInner = styled.div`
  display: ${({show}) => show ? 'block' : 'none'};
  position:absolute;
  z-index:999;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: #28292d;
  padding-top:2em;
`;

// gold css: http://cssdeck.com/labs/mfqb3utw
const GradientBRD = styled.div`
  background: -webkit-linear-gradient(left, #8f6B29, #FDE08D, #DF9F28);
  background: linear-gradient(left, #8f6B29, #FDE08D, #DF9F28);
  padding:5px 0 0;
`;

const Container = styled.div`
  background: #28292d;
  border:1px solid #28292d;
  margin:0;
  padding:5px;
`;

const Title = styled.h1`
  background: -webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
  background: linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform:uppercase;
  font-size: 4em;
  font-family: 'Source Sans Pro', sans-serif;
`;

const Content = styled.div`
background: -webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
background: linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

`;

const Modal = ({ handleClose, title, show, children }) => {
  return (
    <ModalInner show={show}>
      <GradientBRD>
        <Container>
        <Title>{title}</Title>
        {children}
        <button onClick={handleClose}>close</button>
        </Container>
      </GradientBRD>
    </ModalInner>
  );
};

export default Modal;
