import React from "react";

export function General (props) {
    const {isEdit, data, track} = props;
    if (isDone) {
        return (        
            <div className='topBox'>
                <h2>{data.firstName + ' ' + data.lastName}</h2>
                <div className='sameLine'>
                    <p className='plain'>{data.email}</p>
                    <p className='plain'>{data.phone}</p>
                </div>
            </div>
        );
    }
    return (
        <div className='formBox'>
            <form className='smallForm'>
                <hr className='small1'></hr>
                <div>
                    <label htmlFor='firstName' className='plain'>First Name</label><br></br>
                    <input data-id='g' type='text' name='firstName' value={isEdit ? data.firstName : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='lastName' className='plain'>Last Name</label><br></br>
                    <input data-id='g' type='text' name='lastName' value={isEdit ? data.lastName : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='email' className='plain'>Email</label><br></br>
                    <input data-id='g' type='text' name='email' value={isEdit ? data.email : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='phone' className='plain'>Phone Number</label><br></br>
                    <input data-id='g' type='text' name='phone' value={isEdit ? data.phone : ''} onChange={track}></input>
                </div>
                <br></br>
            </form>
        </div>
    );
};