import React from "react";
import ReactDom from "react-dom";

import {ModalContent} from "./ModalContent";

export class ModalBuy extends React.Component{
    root = document.createElement("div");
    body = document.querySelector("body");

    componentDidMount() {
        this.body.appendChild(this.root);
    }
    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const { session, handleClickBuy } = this.props;
        return ReactDom.createPortal(<ModalContent session={session} handleClickBuy={handleClickBuy}/>, this.root);
    }
}
