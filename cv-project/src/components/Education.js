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
        if (!this.props.isEdit){
            return(
                <form className='smallForm'>
                    <hr className='small1'></hr>
                    <div>
                        <label htmlFor='school'>School</label><br></br>
                        <input type='text' name='school' onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='major'>Major</label><br></br>
                        <input type='text' name='major' onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='gradDate'>Graduated</label><br></br>
                        <input name='gradDate' type='date' onChange={this.props.track}></input>
                    </div>
                    <div>
                        <label htmlFor='degreeType'>Degree Type</label><br></br>
                        <select name='degreeType' onChange={this.props.track}>
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
            );
        }
        return(
            <form className='smallForm'>
                <hr className='small1'></hr>
                <div>
                    <label htmlFor='school'>School</label><br></br>
                    <input type='text' name='school' value={this.props.data.school} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='major'>Major</label><br></br>
                    <input type='text' name='major' value={this.props.data.major} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='graduation'>Graduated</label><br></br>
                    <input name='graduation' type='date' value={this.props.data.date} onChange={this.props.track}></input>
                </div>
                <div>
                    <label htmlFor='degreeType'>Degree Type</label><br></br>
                    <select name='degreeType' onChange={this.props.track}>
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
        );
    };
};

export default Education; 