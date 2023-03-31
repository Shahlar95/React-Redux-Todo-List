import {createSlice} from '@reduxjs/toolkit';



const listSlice = createSlice({

    name:"listSlice",
    initialState:{
        arr:[]
    },
    reducers:{
        setTodo:(state,action)=>{
            state.arr = [...state.arr,action.payload]
        },
        delTodo:(state,action)=>{
            
            state.arr = state.arr.filter((e,i)=> i !== action.payload)
        }
    }
})

export default listSlice.reducer 
export const {setTodo,delTodo} = listSlice.actions


