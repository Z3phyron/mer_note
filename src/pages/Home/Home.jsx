import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LayOut from "../LayOut";
// import { notes } from "../Note/Data";
import NoteList from "../Note/NoteList";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SplashScreen from "./SplashScreen";

const Home = () => {
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  const {  notes } = useAuth();


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("USER"));

    setTimeout(() => {
      if (user) {
        setLoading(false);
       navigate("/");
      } else {
        setLoading(true);
        navigate("/sign-in");
      }
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <LayOut>
          <Cont>
            <NoteList notes={notes} />
          </Cont>
        </LayOut>
      )}
    </>
  );
};

const Cont = styled.div`
  padding: 2% 5%;
  
`;

export default Home;
