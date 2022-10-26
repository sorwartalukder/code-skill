import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row className='mt-5 '>
                    <Col lg='4'>
                        <h2 className='fw-bold fs-1'>Courses</h2>
                        {
                            courses.map(course => <Link
                                key={course.id}
                                className='d-block mt-4 fs-4 fw-semibold'
                                to={`/courses/${course.id}`}
                            >{course.title}</Link>)
                        }
                    </Col>
                    <Col lg='8'>
                        <div className='row row-cols-1 row-cols-md-2 g-4 '>
                            {
                                courses.map(course => <Course
                                    key={course.id}
                                    course={course}
                                ></Course>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;