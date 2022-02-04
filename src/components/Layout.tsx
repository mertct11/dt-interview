import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  // any props that come into the component
}
const Layout: FC<Props> = ({ children, ...props }) => (
  <StyledLayout>{children}</StyledLayout>
);

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  margin: auto;
  background-color: white;
`;
