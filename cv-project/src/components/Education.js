import React, {Component} from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.degreeTypes = [
            'Select',
            'Associate',
            'Bachelor',
            'Master',
            'PHD',
            'MD',
            'JD',
        ];
    };

    render() {
        if (!this.props.isEdit){ // If filling out multiple school forms (not editing)
            if (this.props.hasDelete === 'true'){ 
                return(
                    <div className='formDiv'>
                        <form className='smallForm'>
                            <hr className='small1'></hr>
                            <div>
                                <label htmlFor='school'>School</label><br></br>
                                <input data-id='s' data={this.props.index} type='text' name='school' onChange={this.props.track}></input>
                            </div>
                            <div>
                                <label htmlFor='major'>Major</label><br></br>
                                <input data-id='s' data={this.props.index} type='text' name='major' onChange={this.props.track}></input>
                            </div>
                            <div>
                                <label htmlFor='gradDate'>Graduated</label><br></br>
                                <input data-id='s' data={this.props.index} name='gradDate' type='date' onChange={this.props.track}></input>
                            </div>
                            <div>
                                <label htmlFor='degreeType'>Degree Type</label><br></br>
                                <select data-id='s' data={this.props.index} name='degreeType' onChange={this.props.track}>
                                    {
                                        this.degreeTypes.map((item, index) => {
                                                if (item === this.props.data.degreeType) {
                                                    return <option selected key={index} value={item}>{item}</option>;
                                                }
                                                return <option key={index} value={item}>{item}</option>;
                                        })
                                    }
                                </select>
                            </div>
                            <br></br>
                        </form>
                        <button data-id='s' data={this.props.index} onClick={this.props.delete}>Delete</button>
                    </div>
                );
            }// If filling out one school form
            return (
                <div className='formDiv'>
                    <form className='smallForm'>
                        <hr className='small1'></hr>
                        <div>
                            <label htmlFor='school'>School</label><br></br>
                            <input data-id='s' data={this.props.index} type='text' name='school' onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='major'>Major</label><br></br>
                            <input data-id='s' data={this.props.index} type='text' name='major' onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='gradDate'>Graduated</label><br></br>
                            <input data-id='s' data={this.props.index} name='gradDate' type='date' onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='degreeType'>Degree Type</label><br></br>
                            <select data-id='s' data={this.props.index} name='degreeType' onChange={this.props.track}>
                                {
                                    this.degreeTypes.map((item, index) => {
                                            if (item === this.props.data.degreeType) {
                                                return <option selected key={index} value={item}>{item}</option>;
                                            }
                                            return <option key={index} value={item}>{item}</option>;
                                    })
                                }
                            </select>
                        </div>
                        <br></br>
                    </form>
                </div>
            );
        }
        if (this.props.hasDelete === 'true') { // If editing multiple school forms
            return (
                <div className='formDiv'>
                    <form className='smallForm'>
                        <hr className='small1'></hr>
                        <div>
                            <label htmlFor='school'>School</label><br></br>
                            <input data-id='s' data={this.props.index} type='text' name='school' value={this.props.data.school} onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='major'>Major</label><br></br>
                            <input data-id='s' data={this.props.index} type='text' name='major' value={this.props.data.major} onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='graduation'>Graduated</label><br></br>
                            <input data-id='s' data={this.props.index} name='graduation' type='date' value={this.props.data.date} onChange={this.props.track}></input>
                        </div>
                        <div>
                            <label htmlFor='degreeType'>Degree Type</label><br></br>
                            <select data-id='s' data={this.props.index} name='degreeType' onChange={this.props.track}>
                                {
                                    this.degreeTypes.map((item, index) => {
                                        if (item === this.props.data.degreeType) {
                                            return <option selected key={index} value={item}>{item}</option>;
                                        }
                                        return <option key={index} value={item}>{item}</option>;
                                    })
                                }
                            </select>
                        </div>
                        <br></br>
                    </form>
                    <button data-id='s' data={this.props.index} onClick={this.props.delete}>Delete</button>
                </div>
            );
        }
        return (
            <div className='formDiv'>
                <form className='smallForm'>
                    <hr className='small1'></hr>
                    <div>
                        <label htmlFor='school'>School</label><br></br>
                        <input data-id='s' data={this.props.index} type='text' name='school' value={this.props.data.school} onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='major'>Major</label><br></br>
                        <input data-id='s' data={this.props.index} type='text' name='major' value={this.props.data.major} onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='graduation'>Graduated</label><br></br>
                        <input data-id='s' data={this.props.index} name='graduation' type='date' value={this.props.data.date} onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='degreeType'>Degree Type</label><br></br>
                        <select data-id='s' data={this.props.index} name='degreeType' onChange={this.props.track}>
                            {
                                this.degreeTypes.map((item, index) => {
                                    if (item === this.props.data.degreeType) {
                                        return <option selected key={index} value={item}>{item}</option>;
                                    }
                                    return <option key={index} value={item}>{item}</option>;
                                })
                            }
                        </select>
                    </div>
                    <br></br>
                </form>
            </div>
        );
    };
};

export default Education; 