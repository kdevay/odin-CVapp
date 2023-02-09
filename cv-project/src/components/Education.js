import React from "react";

export function Education(props) {
    const {deleteItem, isEdit, data, index, track} = props;
    const degreeTypes = [
        'Select',
        'Associate',
        'Bachelor',
        'Master',
        'PHD',
        'MD',
        'JD',
    ];

    return(
        <div className='formDiv'>
            <form className='smallForm'>
                <hr className='small1'></hr>
                <div>
                    <label htmlFor='school'>School</label><br></br>
                    <input data-id='s' data={index} type='text' name='school' value={isEdit ? data.school : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='major'>Major</label><br></br>
                    <input data-id='s' data={index} type='text' name='major' value={isEdit ? data.major : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='gradDate'>Graduated</label><br></br>
                    <input data-id='s' data={index} name='gradDate' type='date' value={isEdit ? data.date : ''} onChange={track}></input>
                </div>
                <div>
                    <label htmlFor='degreeType'>Degree Type</label><br></br>
                    <select data-id='s' data={index} name='degreeType' onChange={track}>
                        {
                            degreeTypes.map((item, index) => {
                                if (isEdit && item === data.degreeType) {
                                    return <option selected key={index} value={item}>{item}</option>;
                                }
                                return <option key={index} value={item}>{item}</option>;
                            })
                        }
                    </select>
                </div>
            </form>
            { deleteItem === null ? (
                <button className='deleteButton' data-id='s' data={index} onClick={deleteItem}>Delete</button>
            ) : (
                null
            )}
        </div>
    );
};