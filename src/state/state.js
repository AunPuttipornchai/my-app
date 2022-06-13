import React, { Component } from "react";

class ClassScreen extends Component () {

    constructor(props) {
        super(props) ;

        //
        this.state = {};
        //

        console.log(x)
    }

    render() {

        const {x, y} = this.props;

        return (
            <h1>{this.state('{}')},{x}, {y}</h1>
        )
    }
}

