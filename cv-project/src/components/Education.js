import React, { useState, useEffect } from 'react';

export default function Education(props) {
    const {deleteItem, isEdit, data, index, track} = props;
    const [obj, setObj] = useState(data);
    const degreeTypes = [
        'Select',
        'Associate',
        'Bachelor',
        'Master',
        'PHD',
        'MD',
        'JD',
    ];

    useEffect(() => {
        track(obj, 's', index);// Update parent whenever child changes
    }, [obj]);

    const handleChange = e => {
        const {name, value} = e.target;
        if (obj[name] !== value) { // Update child whenever input changes
            setObj({...obj, [name]: value});
        }
    };

    return(
        <div className='formDiv'>
            <form className='smallForm'>
                <hr className='small1'></hr>
                <div>
                    <label htmlFor='school'>School</label><br></br>
                    <input data-id='s' data={index} type='text' name='school' value={obj.school} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='major'>Major</label><br></br>
                    <input data-id='s' data={index} type='text' name='major' value={obj.major} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='gradDate'>Graduated</label><br></br>
                    <input data-id='s' data={index} name='gradDate' type='date' value={obj.date} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='degreeType'>Degree Type</label><br></br>
                    <select data-id='s' data={index} name='degreeType' onChange={handleChange}> 
                        {
                            degreeTypes.map((item, index) => {
                                if (isEdit && item === obj.degreeType) {
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