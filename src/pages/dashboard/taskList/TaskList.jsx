import React from 'react';
import UseTasks from '../../../hooks/UseTasks';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
import Task from './Task';

const TaskList = () => {
    const axiosSecure =useAxiosSecure();
  
    const [tasks, refetch] = UseTasks();
    const handleDeleteTask= task =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/alltask/${task._id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
            })
            }
          });
    }

    const [{ isOver }, drop] = useDrop({
        accept: 'TASK',
        drop: (item, monitor) => {
          // Handle the drop event here
          console.log('Dropped task:', item);
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });
    return (
      <div>
         <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center'>
            

         <DndProvider backend={HTML5Backend}>   
           <div ref={drop} className="card bg-green-400 min-h-screen p-5">
             <h2>TO-Do List:</h2>
             {
                 tasks.map((item,)=>
                
                 <div className='card p-3 my-3 bg-gray-300' key={item._id}>
                     
                     <h2 className=''><span className='font-semibold uppercase'> Task title:  </span>{item.title}</h2>
                     <h2 className=''><span className='font-semibold uppercase'> Task Description:  </span>{item.desc}</h2>
                     <h2 className=''><span className='font-semibold uppercase'> Task Deadline:  </span>{item.selectedDate}</h2>
                     <div className='flex justify-between'>
                     <button> <Link to={`/dashboard/updateTask/${item._id}`}  className='btn text-black bg-yellow-400 '>Edit</Link></button>
                     <button className=' btn text-white bg-red-500' onClick={() => handleDeleteTask(item)}>delete</button>
                     </div>
                     
               </div>
                 )
              } 
 
                     </div> 
                     </DndProvider>
                         
           
           
                     <DndProvider backend={HTML5Backend}>
                   <div className='ref={drop} card bg-green-400 min-h-screen p-5'>
                   <h2>on Going</h2>
                      
                        </div>    
                        </DndProvider>
                  
                  <div className=' card bg-green-400 min-h-screen p-5'> <h2>Completed</h2>
                  <DndProvider backend={HTML5Backend}> </DndProvider> 
                   </div> 
                      
                  </div>
                  </div>
     
    );
};

export default TaskList;