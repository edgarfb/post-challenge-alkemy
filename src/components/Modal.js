import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import AppContext from "../store/app-context";

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  background-color: #fff;
  min-width: 300px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 10px;
  margin-bottom: 30px;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 40px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function Modal(props) {
  const appCtx = React.useContext(AppContext);
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop>
          <ModalContainer>
            <Title>{props.message}</Title>
            <BtnContainer>
              <button className="btn btn-success" onClick={appCtx.closeModal}>
                ok
              </button>
            </BtnContainer>
          </ModalContainer>
        </Backdrop>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
}

export default Modal;
