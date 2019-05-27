import React from 'react';

import Course from '../Course/Course'
import './Courses.css';

class Courses extends React.Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selected: null,
        title: null
    }

    courseClickedHandler = (id, title) => {
        this.setState({selected: id, title: title});
    }

    render () {
        let courses = null;
        if (this.state.selected) {
            courses = <Course id={this.state.selected} title={this.state.title}/>
        }
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={() => this.courseClickedHandler(course.id, course.title)}>{course.title}</article>;
                        } )
                    }
                </section>
                {courses ? courses : null}
            </div>
        );
    }
}

export default Courses;