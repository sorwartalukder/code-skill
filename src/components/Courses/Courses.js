import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='container'>
            <div className=''>
                <div className='row row-cols-1 row-cols-md-3 g-4 mt-5'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;