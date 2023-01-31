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
            gradDate:''
    };

    trackChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    render() {
        return(
            <form>
                <label for='school'>School</label>
                <input type='text' name='school' onChange={this.trackChanges} ></input>
                <label for='major'>Major</label>
                <input type='text' name='major' onChange={this.trackChanges} ></input>
                <label for='degreeType'>Degree Type</label>
                <select name='degreeType'>
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
                <button>Submit</button>
                <button>Add New</button>
            </form>
        );
    };
};

export default Education; 