import React from 'react';
import TaskForm from './TaskForm';
import TaskList from '../taskList/TaskList';

const AddTask = () => {
    return (
        <div className='mt-10 flex flex-col justify-center items-center'>
            <div> <h2 className='text center font-bold text-3xl'> Add Task</h2></div>
         <div className='w-1/2'>
         <TaskForm></TaskForm>
         </div> 
         <div className='w-1/2'>
         <TaskList></TaskList>
         </div>    
         
            
        </div>
    );
};

export default AddTask;