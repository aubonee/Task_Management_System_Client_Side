import React from 'react';
import UseTasks from '../../../hooks/UseTasks';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

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
    return (
        <div>
            <div className="todo-items">

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>To-Do Tasks</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        tasks.map((item,index)=>
        <tr key={item._id}>
            <th> {index+1} </th>
            <td> {item.title}</td>
            <td> <Link to={`/dashboard/salaryUpdate/${item._id}`}  className='btn text-black bg-yellow-500'>Edit</Link></td>
            <td><button onClick={() => handleDeleteTask(item)}>delete</button></td>
            
        </tr>
        )
     } 
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default TaskList;