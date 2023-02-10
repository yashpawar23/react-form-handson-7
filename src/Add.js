import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData } from './dataSlice';

const Add = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        age: "",
        course: "",
        batch: "",
    })
    const ChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit btn clicked", data)
        dispatch(addData(data));
        navigate('/')

    }
    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Add New Student Form</h1>
                    <label className='form-label' htmlFor="name">Name</label><br />
                    <input className='form-input' onChange={ChangeHandler} type="text" name="name" value={data.name} placeholder='name' /><br />
                    <label className='form-label' htmlFor="age">Age</label><br />
                    <input className='form-input' onChange={ChangeHandler} type="number" name="age" value={data.age} placeholder='age' /><br />
                    <label className='form-label' htmlFor="course">Course</label><br />
                    <input className='form-input' onChange={ChangeHandler} type="text" name="course" value={data.course} placeholder='course' /><br />
                    <label className='form-label' htmlFor="batch">Batch</label><br />
                    <input className='form-input' onChange={ChangeHandler} type="text" name="batch" value={data.batch} placeholder='batch' /><br />
                    <button className='btn' type="submit">Add Student</button>
                </form>
            </div>
        </>
    )
}

export default Add
