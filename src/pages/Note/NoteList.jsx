import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NoteSummary from "./NoteSummary";
import { motion } from "framer-motion";
import axios from "axios";

const NOTE_URL = "http://localhost:5000/api/notes/";

const initial = {
  opacity: 0,
  translateX: -50,
  translateY: -50,
};
const animate = {
  opacity: 1,
  translateX: 0,
  translateY: 0,
};

const NoteList = (props) => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      const token = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };

      const response = await axios.get(NOTE_URL, config);
      setNotes(response.data);

      return response.data;
    };
    getNotes();
  }, []);

  return (
    <Cont>
      <Wrap>
        {notes &&
          notes.map((note, i) => (
            <motion.div
              key={note._id}
              initial={initial}
              animate={animate}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <NoteSummary note={note} />
            </motion.div>
          ))}
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  //
  width: 100%;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: auto;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default NoteList;
