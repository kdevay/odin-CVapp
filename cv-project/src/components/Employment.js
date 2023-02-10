import React, { useState, useEffect } from 'react';

export default function Employment(props) {
    const {deleteItem, data, index, track} = props;
    const [obj, setObj] = useState(data);

    useEffect(() => {
        track(obj, 'j', index);// Update parent whenever child changes
    }, [obj]);

    const handleChange = e => {
        const {name, value} = e.target;
        if (obj[name] !== value) { // Update child whenever input changes
            setObj({...obj, [name]: value});
        }
    };

    return(
        <div className='formDiv'>
            <form className="jobForm">
                <hr className='jobLine'></hr>
                <div>
                    <label htmlFor='company' className='plain'>Company</label><br></br>
                    <input onChange={handleChange} data-id='j' data={index} type='text' name='company' value={obj.company}></input>
                </div>
                <div>
                    <label htmlFor='position' className='plain'>Position</label><br></br>
                    <input onChange={handleChange} data-id='j' data={index} type='text' name='position' value={obj.position}></input>
                </div>
                <div className='bigInput'>
                    <label htmlFor='duties' className='plain'>Duties</label><br></br>
                    <textarea onChange={handleChange} data-id='j' data={index} type='text' name='duties' className='bigBox' maxLength='400' value={obj.duties}></textarea>
                </div>
                <div>
                    <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                    <input onChange={handleChange} data-id='j' data={index} name='startDate' type='date' value={obj.startDate}></input>
                </div>
                <div>
                    <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                    <input onChange={handleChange} data-id='j' data={index} name='endDate' type='date' value={obj.endDate}></input>
                </div>
            </form>
            { deleteItem === null ? (
                <button className='deleteButton' data-id='j' data={index} onClick={deleteItem}>Delete</button>
            ) : (
                null
            )}
            
        </div>
    );
}