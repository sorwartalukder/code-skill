import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, picture, title, rating, details } = course;
    return (
        <div className='col'>
            <Card className='h-100 bg-secondary text-white  shadow'>
                <Card.Img height={300} variant="top" src={picture} />
                <Card.Body className=''>
                    <Card.Title className='text-center fw-bold fs-3'>{title}</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between ' >
                    <div className='d-flex '>
                        <p className='fs-5 me-2 text-warning'><FaStar /></p>
                        <p className='mt-1'>{rating}</p>
                    </div>
                    <Link>
                        <button className='btn btn-primary '>See Details <FaArrowRight /></button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;
// style={{ width: '18rem' }}