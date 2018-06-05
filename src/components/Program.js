import React from 'react';
import ReactDOM from 'react-dom';



const Program = (props) => (

    <div className="">
        <p className=""> ({props.count}) {props.programName} | {props.programEmail} | {props.programPhone} </p>

        <hr/>
    </div>


);



export default Program;
