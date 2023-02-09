import React from "react";

export function Employment(props) {
    const {deleteItem, isEdit, data, index, track} = props;

    return(
        <div className='formDiv'>
            <form className="jobForm">
                <hr className='jobLine'></hr>
                <div>
                    <label htmlFor='company' className='plain'>Company</label><br></br>
                    <input data-id='j' data={index} type='text' name='company' value={isEdit ? data.company : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='position' className='plain'>Position</label><br></br>
                    <input data-id='j' data={index} type='text' name='position' value={isEdit ? data.position : ''} onChange={track}></input>
                </div>
                <div className='bigInput'>
                    <label htmlFor='duties' className='plain'>Duties</label><br></br>
                    <input data-id='j' data={index} type='text' name='duties' className='bigBox' maxLength='400' onClick={track} value={isEdit ? data.duties : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='startDate' className='plain'>Start Date</label><br></br>
                    <input data-id='j' data={index} name='startDate' type='date' value={isEdit ? startDate.duties : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='endDate' className='plain'>End Date</label><br></br>
                    <input data-id='j' data={index} name='endDate' type='date' value={isEdit ? data.endDate : ''} onChange={track}></input>
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