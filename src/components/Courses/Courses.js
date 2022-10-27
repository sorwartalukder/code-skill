import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row className='mt-5 '>
                    <Col md='3' className='d-none d-md-block'>
                        <h2 className='fw-bold fs-1'>Courses</h2>
                        {
                            courses.map(course => <div
                                className='mt-3'
                                key={course.id}
                            >
                                <Image src={course.picture} style={{ width: '60px' }} roundedCircle />
                                <Link
                                    className=' mt-4 ms-3 fw-semibold text-decoration-none'
                                    to={`/courses/${course.id}`}
                                >{course.title}</Link>
                            </div>)
                        }
                    </Col>
                    <Col md='9'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 '>
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