import React from "react";
import Menu from "../menu/menu";
import Header from "../header/header";
import Container from "../container/container.jsx";
import Footer from "../footer/footer";

function Layout() {
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
            <Container></Container>
            <Footer></Footer>
        </div>
    );
}
export default Layout;
