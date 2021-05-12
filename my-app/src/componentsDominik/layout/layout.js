import React from "react";
import Nav from "../menu/menu";
import Header from "../header/header";
import Container from "../container/container";
import Footer from "../footer/footer";
import "./layout.css";
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
