import React, { useState } from "react";
import styled from "styled-components";



import { useAuth } from "../../context/AuthContext";

const EditNote = (props) => {
  const { note } = props
  const {editNote } = useAuth()
  const [formData, setFormData] = useState({
    title: note.title,
    content: note.content,
  });

  const { title, content } = formData;


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
    } else {
      const noteData = {
        title,
        content,
      };
      console.log(noteData);
      const id = note?._id;
      editNote(id, noteData)
    }
  };



  return (
    <Cont>
      <Wrap>
        <h3 className="heading">Edit Note</h3>

        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputField>
              <Input
                type="text"
                name="title"
                onChange={onChange}
                value={title}
                placeholder="Title........"
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextArea
                name="content"
                onChange={onChange}
                value={content}
                placeholder="Content....."
              />
            </InputField>
          </FormControl>
          {/* <Cta> */}
          <Btn type="submit">Submit</Btn>
          {/* </Cta> */}
        </Form>
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  width: 100%;
  padding: 15vh 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
`;
const Wrap = styled.div`
  /* p  */
  width: 100%;
  margin: auto;
  /* From https://css.glass

  background: rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(3.3px); */
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  .heading {
    margin-bottom: 20px;
    font-size: 30px;
    color: var(--white);
  }

  .link {
    margin: 20px 0;
    display: grid;
    gap: 10px;
  }
`;
const Form = styled.form`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  button {
    width: 100%;
    padding: 20px 10px;
    border-radius: 8px;
    outline: none;
    border: none;
  }
`;
const FormControl = styled.div`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;
const InputField = styled.div`
  /* p  */
  width: 100%;
  position: relative;

  .content {
    min-height: 30vh;
  }

  .show {
    position: absolute;
    right: 20px;
    bottom: 13px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    border-radius: 50px;

    &:hover {
      background: #f2f2f2;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  outline: none;
  border: none;
  border-radius: 4px;
  background: rgba(244, 242, 242, 0.116);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(3.3px);
`;
const TextArea = styled.textarea`
  width: 100%;
  min-height: 30vh;
  padding: 15px 10px;
  background: rgba(244, 242, 242, 0.116);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(3.3px);
  outline: none;
  border: none;
  border-radius: 4px;
`;
const Btn = styled.button`
  width: 100%;
  color: #fff;
  /* /* From https://css.glass */

  background: #333;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(3.3px);
  padding: 15px 10px;
  outline: none;
  border: none;
  border-radius: 4px;
`;

export default EditNote;
