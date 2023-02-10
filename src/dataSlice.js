// slice.js
// some data present inside our store 
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice(
    {
        name : 'dataSlice',
        initialState : [{ name: 'Yash',age:20,course:"Full stack",batch:"sept" }, { name: 'Sejal',age:22,course:"Full stack",batch:"sept" }, { name: 'Rohan',age:35,course:"Full stack",batch:"sept" }, { name: 'Raja',age:25,course:"mern",batch:"sept" }, { name: 'Minu',age:25,course:"mern",batch:"sept" }],
        // reducer function dispatch actions to update your state
        reducers :
        {
            editData : (state,action)=>{
               console.log("Edit : ")
               console.log(action.payload);
                state[action.payload.index] = action.payload.newObj;
                return (state) 
            },
            addData : (state,action)=>{
                state.push(action.payload)
                return (state)
            }    
        }
    }
);

export const {editData,addData} = dataSlice.actions;
export default dataSlice.reducer; 