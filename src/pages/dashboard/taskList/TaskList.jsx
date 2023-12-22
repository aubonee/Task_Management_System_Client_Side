import React from 'react';
import UseTasks from '../../../hooks/UseTasks';

const TaskList = () => {
    const [tasks] = UseTasks();
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
            <td><button>delete</button></td>
            
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