import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IoClose } from 'react-icons/io5'
import Modal from "@mui/material/Modal";
import CreateNote from "../pages/Note/CreateNotes";

const Navbar = () => {
  const { logOutUser, currentUser } = useAuth();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Cont>
      <Logo>Notes</Logo>
      <Menu>
        {currentUser && (
          <>
            <li onClick={handleOpen}>
              <Link to="/">Create Note</Link>
            </li>
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
                <CreateNote handleClose={handleClose} />
              </ModalBox>
            </Modal>
          </>
        )}
        {!currentUser && (
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        )}

        {currentUser && (
          <li>
            <Link to="/" onClick={logOutUser}>
              Log Out
            </Link>
          </li>
        )}
      </Menu>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 5%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: 300;

  a {
    color: #333;
  }
`;
const Menu = styled.ul`
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      color: #333;
    }
  }
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


export default Navbar;
