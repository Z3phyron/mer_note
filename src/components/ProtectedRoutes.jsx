import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ props: any }) => {
  const { isLoggedIn, currentUser } = useAuth();

  if (!currentUser && isLoggedIn === false) {
    return <Navigate to="/sign-up" />;
  }

  return (
    <Page>
      <Outlet />
    </Page>
  );
};

const Page = styled.div`
  padding-left: 20%;
  padding-top: 20vh;

  @media screen and (max-width: 900px) {
    padding-left: 0;
  }
`;

export default ProtectedRoutes;
