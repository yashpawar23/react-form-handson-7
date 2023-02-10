import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const array = useSelector((state)=>state.dataKey); // 
  console.log(array)
  return (
    <>
      <h1>Student Details</h1>
      <div id='btn-div'>
      <Link to="/addStudent"><button className='btn' onClick={handleAdd}>Add New Student</button></Link>
      </div>
      <div style={{backgroundColor:"pink",color:"black",fontWeight:"bold"}} className='table-flex'>
        <div>Name</div>
        <div>Age</div>
        <div>Course</div>
        <div>Batch</div>
        <div>Change</div>
      </div>
        {
        array.map((item,index) => (
          // each item is an object
            <div className='table-flex' key={index}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.course}</div>
            <div>{item.batch}</div>
            <div>
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                {/* {console.log("Item.id : " + item.id)} */}
                <Link to='./editStudent' state={{data:index}}>
                    Edit
                </Link> 
            </div>
          </div>
        ))}
    </>
  );
}

export default Table;