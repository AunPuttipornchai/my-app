import React from "react";

const Footer = (props) => {

    //Debreak Constructor
    const {company, email} = props

    return (
    // <div>Powered by {props.company} | Contract By Email {props.email}</div>
    <div>Powered by {company} | Contract By Email {email}</div>

    )
}

export default Footer;