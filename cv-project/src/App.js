import uniqid from "uniqid";
import React, {Component} from "react";
import General from "./components/General";
import Education from "./components/Education";
import Employment from "./components/Employment";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isDone: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      job: {
        company: '',
        position: '',
        duties: '',
        startDate: '',
        endDate: '',
        id: ''
      },
      school: {
        school:'',
        major:'',
        degreeType:'',
        minor:'',
        gradDate:'',
        id: ''
      },
      schools: [{school:'', major:'', degreeType:'', minor:'', gradDate:'', id:''}],
      jobs: [{company: '', position: '', duties: '', startDate: '', endDate: '', id:''}]
    };
  };

  handleDisplay = (e) => {
    let status = e.target.id === 'done' ? true : false;
    this.setState({
      isDone: status
    });
  };

  handleGeneral = (obj) => {
    this.setState({
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      phone: obj.phone,
    });
  };
  trackGeneral = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  addJob = () => {
    this.setState({
      jobs: jobs.concat(this.state.job)
    });
  }
  trackJob = (index, obj) => {
    let arr = this.state.jobs.slice();
    arr[index] = obj;
    this.setState({
      jobs: arr
    });
  }

  addSchool = () => {
    this.setState({
      schools: schools.concat(this.state.school)
    });
  }
  trackSchool = (index, obj) => {
    let arr = this.state.schools.slice();
    arr[index] = obj;
    this.setState({
      schools: arr
    });
  }

  render() {
    // If done filling out form
    if (!this.state.isDone) {
      return(
        <div id='main'>
          <h1>CV Generator</h1>
          <div className='formBox' key={element.id}>
            <p className='biggest'>{this.state.firstName + ' ' + this.state.lastName}</p>
            <p className='plain'>{this.state.email}</p>
            <p className='plain'>{this.state.phone}</p>
          </div>
          <div className="formBox">
            <h2>Education</h2>
            {this.state.schools.map(element => {
              if (element.minor === '') {
                <div className='item' key={element.id}>
                  <p className='title'>{element.schools}</p>
                  <p className='plain'>{element.major + ' ' + element.degreeType}</p>
                  <p className='plain'>{'Graduated '+ element.gradDate}</p>
                </div>
              } else {
                <div className='item' key={element.id}>
                  <p className='title'>{element.schools}</p>
                  <p className='plain'>{element.major + ' ' + element.degreeType}</p>
                  <p className='plain'>{element.minor + ' minor'}</p>
                  <p className='plain'>{'Graduated '+ element.gradDate}</p>
                </div>
              }
            })}
          </div>
          <div className="formBox">
          <h2>Employment</h2>
            {this.state.jobs.map(element => {
              if (element.duties === '') {
                <div className='item' key={element.id}>
                  <p className='title'>{element.company}</p>
                  <p className='plain'>{'Position: ' + element.position}</p>
                  <p className='plain'>{'Duties: ' + element.duties}</p>
                  <p className='plain'>{element.endDate + ' - ' + element.startDate}</p>
                </div>
              } else {
                <div className='item' key={element.id}>
                  <p className='title'>{element.company}</p>
                  <p className='plain'>{'Position: ' + element.position}</p>
                  <p className='plain'>{element.endDate + ' - ' + element.startDate}</p>
                </div>
              }
            })}
          </div>
          <button id='edit' onClick={this.handleDisplay}>Edit</button>
        </div>
      );
  }
  // If editing or filling for for the first time
  return(
    <div>
      <h1>CV Generator</h1>

      <div className='formBox'>
        <h2>General</h2>
        <General data={uniqid()} onSubmit={handleGeneral} track={trackGeneral}></General>
      </div>

      <div className='formBox'>
        <h2>Education</h2>
        {
          this.state.schools.map((school, index) => {
            <Education data={uniqid()} id={index} track={trackSchool}></Education> 
          })
        }
        <button onClick={addSchool}> + </button>
      </div>

      <div className='formBox'>
        <h2>Employment</h2>
        {
          this.state.schools.map((school, index) => {
            <Employment data={uniqid()} id={index} track={trackJob}></Employment> 
          })
        }
        <button onClick={addJob}> + </button>
      </div>

      <button id='done' onClick={this.handleDisplay}>Done</button>
    </div>
  );}
}

