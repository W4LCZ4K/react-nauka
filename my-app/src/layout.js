import React from "react";
import Nav from "./componentsDominik/menu";
import Header from "./componentsDominik/header";
import Container from "./componentsDominik/container";
import Footer from "./componentsDominik/footer";
import "./layout.css";

import "./Empty2.css";

function Layout(props) {
  return (
    <div id="layout">
      <Nav p1={props.link1} p2={props.link2} p3={props.link3}></Nav>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
