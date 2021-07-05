import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { error, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
