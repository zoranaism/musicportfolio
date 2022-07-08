import React from "react";
import Logo from "../../logo";
import NavBar from "../../navbar";
import HeaderSocial from "../../HeaderSocial";
import HeaderContainer from "../../../container/header";
import { Container, Row } from "react-bootstrap";

const Header = ({ classes }) => {
  return (
    <HeaderContainer classes={classes ? classes : null}>
      <Container>
        <Row>
          {/* <Logo/> */}

          <h2 style={{ height: "100px", lineHeight: "100px" }}>zoranaism</h2>

          {/* <NavBar/> */}

          {/* <HeaderSocial /> */}
        </Row>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
