import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from './dataSlice';


function Edit() {
   const location = useLocation(); // returns the location object 
   const navigate = useNavigate();
   const index = (location.state.data);
   const dispatch = useDispatch();
   const array = useSelector((state)=>state.dataKey); // 

    // array of objects : context.entries
    // function         : context.updateFunction


    // the object in which the changes will be done 
    const newObj = {
        name : array[index].name,
        id : array[index].id,
        age : array[index].age,
        course : array[index].course,
        batch : array[index].batch
    }
    
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       // console.log(context.entries[index])
       dispatch(editData({newObj,index}));
       // payload : parameter passed with the action 
    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj) //  updated prevObj is the new state 
    //     }
    //    );
       navigate('/');
    }


   return (
    <>
    <form>
        <h1>Edit Student Name</h1>
        <label className='form-label' htmlFor="name">Name</label><br />
        <input className='form-input' type="text" onChange={handleChange} name='name' defaultValue= {array[index].name}></input><br />
        <label className='form-label' htmlFor="age">Age</label><br />
        <input className='form-input' type="number" onChange={handleChange} name='age'   defaultValue= {array[index].age}></input><br />
        <label className='form-label' htmlFor="age">Age</label><br />
        <input className='form-input' type="text" onChange={handleChange} name='course'   defaultValue= {array[index].course}></input><br />
        <label className='form-label' htmlFor="age">Age</label><br />
        <input className='form-input' type="text" onChange={handleChange} name='batch'   defaultValue= {array[index].batch}></input>
        <br/>
        <button className='btn' onClick={handleUpdate}>Update Name</button>
        </form>
    </>
  )
}

export default Edit;