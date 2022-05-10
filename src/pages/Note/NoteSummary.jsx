import React, {useState} from "react";
import styled from "styled-components";
import WordLimit from "react-word-limit";
import { useAuth } from "../../context/AuthContext";
import { CgTrash } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import Modal from "@mui/material/Modal";
import EditNote from "./EditNote";

const NoteSummary = (props) => {
  const { note } = props;
  const { delNote } = useAuth();
  const { title, content } = note;

   
  const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const del = () => {
    const id = note?._id;
    delNote(id);
  };

  return (
    <Card>
      <>
        <button className="edit" onClick={handleOpen}>
          <VscEdit />
        </button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
            <button onClick={handleClose} className="button">
              <IoClose className="icon" />
            </button>
            <EditNote handleClose={handleClose} note={note} />
          </ModalBox>
        </Modal>
      </>

      <button className="del" onClick={del}>
        <CgTrash />
      </button>
      <Title>{title}</Title>
      <Content>
        <WordLimit limit={300}>{content}</WordLimit>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 350px;
  /* From https://css.glass */
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: none;
  outline: none;
  padding: 20px 30px;
  border-radius: 10px;
  margin: auto;

  .del {
    background: #333;
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  .edit {
    background: #333;
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    position: absolute;
    top: 20px;
    right: 50px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.h4`
  margin-bottom: 20px;
  font-size: 20px;
`;
const Content = styled.p`
  font-size: 10px;
  line-height: 150%;
  font-weight: 100;
  letter-spacing: 1px;
`;

const ModalBox = styled.div`
  width: 80%;
  height: 80vh;
  /* From https://css.glass */
  background: rgba(51, 51, 51, 0.171);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  /* bottom: 50%; */
  left: 50%;
  /* right: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  padding: 5% 2% 2%;
  position: relative;

  .button {
    background: #333;
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .icon {
      color: #fff;
    }
  }
`;

export default NoteSummary;
