import uniqid from 'uniqid';
import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Employment from './components/Employment';
import {TopFormHeader, FormHeader} from './components/Headers';

export default function App () {
    const [isEdit, setIsEdit] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [person, setPerson] = useState({firstName: '', lastName: '', email: '', phone: ''});
    const [schools, setSchools] = useState([addNew('school')]);
    const [jobs, setJobs] = useState([addNew('job')]);

    const handleDisplay = (e) => {
        e.preventDefault();
        if (e.target.id === 'edit') {
            setIsDone(false);
            setIsEdit(true);
        } else {
            setIsDone(e.target.id === 'done' ? true : false);
            setIsEdit(false);
        }
        return;
    };

    const addField = (e) => {
        e.preventDefault();
        e.target.id === 's' ? 
        setSchools(() => schools.concat(addNew('school'))) 
        :
        setJobs(() => jobs.concat(addNew('job')));
    };

    const trackChanges = (obj, type, index) => {
        if (type === 'g') {
            setPerson(() => person !== obj ? obj : person);
        } else if (type === 'j') {
            setJobs( () => {
                if (jobs[index] !== obj) {
                    jobs[index] = obj;
                }
                return jobs;
            });
        } else {
            setSchools( () => {
                if (schools[index] !== obj){
                    schools[index] = obj;
                }
                return schools;
            });
        }
    };

    const deleteItem = (e) => {
        e.preventDefault();
        let index = e.target.getAttribute('data');
        e.target.getAttribute('data-id') === 'j' ? setJobs(jobs.splice(index, 1)) : setSchools(schools.splice(index, 1));
        return;
    };

    if (!isDone) { // If editing/filling form
    return(
        <div id='main'>
            <TopFormHeader></TopFormHeader>
            <General isDone={isDone} data={person} track={trackChanges}></General>
            <FormHeader addField={addField} name={'Education'}></FormHeader>
            <div className='formBox'>
                {
                    schools.map((school, index) => {
                        return (
                            <Education data={school} index={index} key={school.key} track={trackChanges} isEdit={isEdit}
                            deleteItem={schools.length > 1 ? deleteItem : null}></Education>
                        );
                    })
                }
            </div>
            <FormHeader addField={addField} name={'Employment'}></FormHeader>
            <div className='formBox'>
                {
                    jobs.map((job, index) => {
                        return (
                            <Employment data={job} index={index} key={job.key} track={trackChanges}
                            deleteItem={jobs.length > 1 ? deleteItem : null}></Employment>
                        );
                    })
                }
            </div>
            <button id='done' onClick={handleDisplay}>Done</button>
        </div>
    );
    }

    return( // If done filling out form
    <div id='displayMain'>
        <General isDone={isDone} data={person} isEdit={isEdit} track={null}></General>
        <div className='mainGrid'>
            <div className="SchoolBox">
                <h2>Education</h2>
                {schools.map((school)  => {
                    return (
                    <div className='item' key={school.key}>
                        <p className='displayTitle'>{school.school}</p>
                        <p className='plain'>{school.major + ' ' + school.degreeType}</p>
                        <p className='plain'>{'Graduated '+ formatDate(school.gradDate)}</p>
                    </div>
                    );
                })}
            </div>
            <div className="jobBox">
                <h2>Employment</h2>
                {
                    jobs.map((job) => {
                        return (
                            <div className='item' key={job.key}>
                            <div className='dateLine'>
                                <p className='displayTitle'>{job.company}</p>
                                <p className='date'>{formatDate(job.startDate) + ' - ' + formatDate(job.endDate)}</p>
                            </div>
                            <p className='plain'>{'Position: ' + job.position}</p>
                            <p className='plain'>{'Duties: ' + job.duties}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        <button id='edit' onClick={handleDisplay}>Edit</button>
    </div>
    );
}

function formatDate(string) {
    const Months = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'April', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'};
    let arr = string.split('-') // arr = [year, month, day]
    let month = Months[arr[1]];
    return month + ' ' + arr[0]
};

function addNew(type) {
    let job = {company: '', position: '', duties: '', startDate: '', endDate: '', key: uniqid()};
    let school =  {school:'', major:'', degreeType:'', gradDate:'', key: uniqid()};
    return type === 'job' ? job : school;
}