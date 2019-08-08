import React, { Component } from "react";
import ReactDom from "react-dom";

export class Portal extends React.Component{
    state = {
        isShow: false
    };
    toggleShowModal = () => this.setState((prevState) => ({isShow: !prevState.isShow}));
    render() {
        return(
            <div>
                <h1>hello</h1>
                <button onClick={this.toggleShowModal}>fjg</button>
                {this.state.isShow && ReactDom.createPortal(
                    <h1>kjfgh</h1>,
                    document.getElementByID("portal")
                )
                }
            </div>
        )
    }
}