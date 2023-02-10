import React, { useState, useEffect } from 'react';

export default function General(props) {
    const {isDone, track} = props;
    const [obj, setObj] = useState(props.data);

    useEffect(() => {
        if (!isDone) { // If form display
            track(obj, 'g', 0); // Update parent whenever child changes
        }
    }, [obj]);

    const handleChange = e => {
        const {name, value} = e.target;
        if (obj[name] !== value) { // Update child whenever input changes
            setObj({ ...obj, [name]: value});
        }
    };

    if (isDone) {
        return (        
            <div className='topBox'>
                <h2>{obj.firstName + ' ' + obj.lastName}</h2>
                <div className='sameLine'>
                    <p className='plain'>{obj.email}</p>
                    <p className='plain'>{obj.phone}</p>
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
                    <input data-id='g' type='text' name='firstName' value={obj.firstName} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='lastName' className='plain'>Last Name</label><br></br>
                    <input data-id='g' type='text' name='lastName' value={obj.lastName} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='email' className='plain'>Email</label><br></br>
                    <input data-id='g' type='text' name='email' value={obj.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='phone' className='plain'>Phone Number</label><br></br>
                    <input data-id='g' type='text' name='phone' value={obj.phone} onChange={handleChange}></input>
                </div>
                <br></br>
            </form>
        </div>
    );
};