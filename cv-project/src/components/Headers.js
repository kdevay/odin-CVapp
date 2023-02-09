import React from "react";

export function TopFormHeader() {
    return( 
        <React.Fragment>
            <h1>CV Generator</h1>
            <div className='topHeading'><h2>General</h2></div>
            <hr className='topLine'></hr>
        </React.Fragment>
    );
}

export function FormHeader(props) {
    const {addField, name} = props;
    return (
        <React.Fragment>
            <div className='heading'>
                <h2>{name}</h2>
                <button className='add' id={name === 'Education' ? 's' : 'j'} onClick={addField}> + </button>
            </div>
            <hr className='topLine'></hr>
        </React.Fragment>
    );
}