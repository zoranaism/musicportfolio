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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%"
            }}
          >
            <h2 style={{ height: "100px", lineHeight: "100px" }}>zoranaism</h2>

            {/* <NavBar/> */}

            <HeaderSocial />
          </div>
        </Row>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
