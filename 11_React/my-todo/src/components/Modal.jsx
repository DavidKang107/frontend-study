import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 25rem;
  background: #f1f1f1;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow-y: auto;

  svg {
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
  }

  hr {
    margin: 0;
    border: 0.5px solid #ccc;
  }

  .body {
    padding: 1.25rem;
    font-style: 1rem;
    line-height: 1.125rem;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
  }
`;

function Modal(props) {
  const { title, children, onCloseModal, onEdit } = props;

  return (
    <Background>
      <ModalContainer>
        <div className="header">
          <span className="modal-title">{title}</span>
          <MdClose onClick={onCloseModal} />
        </div>
        <hr />
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button type="button" onClick={onEdit}>확인</button>
        </div>
      </ModalContainer>
    </Background>
  );
};

export default Modal;