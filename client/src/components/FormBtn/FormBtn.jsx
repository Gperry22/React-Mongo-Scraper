import React from "react";

const FormBtn = props => (
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary" onClick={props.onClick}>Submit
    </button>
);

export default FormBtn;