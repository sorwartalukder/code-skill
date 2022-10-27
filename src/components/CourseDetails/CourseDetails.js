import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData()
    const { id, picture, title, details, rating, price } = course;
    return (
        <Container className=' mt-5'>
            <div className='d-md-flex flex-row-reverse justify-content-between'>
                <div>
                    <Pdf targetRef={ref} filename="course_details.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className=' btn  btn-primary'>Download Details</button>}

                    </Pdf>
                </div>
                <div className='mt-3 mt-md-0'>
                    <h3>Welcome to {title} course details page.</h3>
                    <p>Your learn {title}? If yes then buy this course. The best course in this country {details[5].slice(2, 15)} level (insallah)</p>
                </div>

            </div>
            <Card ref={ref}>
                <Row>
                    <Col md='4 '>
                        <Card.Img className='h-100' src={picture} />
                    </Col>
                    <Col md='8'>
                        <Card.Body>
                            <Card.Title className='fs-2 fw-bold'>{title}</Card.Title>
                            <div className='ms-sm-5 mt-3'>
                                <h4>Course Details</h4>
                                {
                                    details.map((detail, index) => <Card.Text
                                        className='m-0 ps-4'
                                        key={index}
                                    >{detail}</Card.Text>)
                                }
                            </div>
                            <h3>
                                Price: ${price}
                            </h3>
                            <div className='d-flex justify-content-between '>
                                <div className='d-flex fs-5'>
                                    <p className='text-warning'><FaStar /></p>
                                    <p className='ms-2 mt-1'>{rating}</p>
                                </div>
                                <Link to={`/course/access/${id}`}><Button variant="primary">premium access <FaArrowRight /></Button></Link>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CourseDetails;