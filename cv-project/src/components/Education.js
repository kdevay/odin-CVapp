import React, {Component} from "react";

class Education extends Component {
    render(){
        return(
            <div>
                <label for='institution'>Institution</label>
                <input type='text' name='institution' placeholder='School name here'></input>
                <label for='major'>Major</label>
                <input type='text' name='major'></input>
                <label>Degree Type</label>
                <select name='status'>
                    <option value="A">Associate</option>
                    <option value="B">Bachelor</option>
                    <option value="M">Master</option>
                    <option value="PHD">PHD</option>
                    <option value="MD">MD</option>
                    <option value="JD">JD</option>
                </select>
                <label for='minor'>Minor</label>
                <input type='text' name='minor'></input>
                <label for='graduation'>Graduation date</label>
                <input name='graduation' type='date'></input>
                <button>Submit</button>
                <button>Add New</button>
            </div>
        );
    };
};