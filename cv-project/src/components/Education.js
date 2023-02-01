import React, {Component} from "react";

class Education extends Component {
  // state: 
    constructor(props) {
        super(props);
        this.state = {
            school:'',
            major:'',
            degreeType:'',
            minor:'',
            gradDate:'',
            id: this.props.data
    };

    updateId = () => {
        this.props.track(this.props.id, this.state);
    }

    trackChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.track(this.props.id, this.state);
    };

    render() {
        {this.updateID()};
        return(
            
            <form key={this.state.id}>
                <label for='school'>School</label>
                <input type='text' name='school' onChange={this.trackChanges} ></input>
                <label for='major'>Major</label>
                <input type='text' name='major' onChange={this.trackChanges} ></input>
                <label for='degreeType'>Degree Type</label>
                <select name='degreeType' onChange={this.trackChanges}>
                    <option value="A">Associate</option>
                    <option value="B">Bachelor</option>
                    <option value="M">Master</option>
                    <option value="PHD">PHD</option>
                    <option value="MD">MD</option>
                    <option value="JD">JD</option>
                </select>
                <label for='minor'>Minor</label>
                <input type='text' name='minor' onChange={this.trackChanges} ></input>
                <label for='graduation'>Graduation date</label>
                <input name='graduation' type='date' onChange={this.trackChanges} ></input>
            </form>
        );
    };
};

export default Education; 