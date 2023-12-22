import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
    const {_id, title, desc, priority,  selectedDate }=useLoaderData();
  
    const [updatedDate, setupdatedDate] = useState(null);
  const handleDateChange = (date) => {
    setupdatedDate(date);
   console.log('date:',date);
  };
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        const updatedTask = {
           title: data.title,
           desc: data.desc,
           priority: data.priority,
           selectedDate: data.updatedDate,
        };

        try {
            const updateTaskRes = await axiosSecure.patch(`/updateTask/${_id}`, updatedTask);
            console.log(updateTaskRes.data);

            if (updateTaskRes.data.modifiedCount>0) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `task updated done.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }
    return (
        <div>

             <div className='w-full flex  flex-col pt-5 jusify-center items-center'>
            <div className=" w-[400px] ">
  
  <div className=" items-center text-center">
   
    <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="className='mt-10 flex flex-col justify-center items-center' ">
                    <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Title</span>
                                </label>
                                <input type="text" defaultValue={title} {...register("title", { required: true })} title="title"  className="input input-bordered w-full" />
                                {errors.title && <span className="text-red-600">Name is required</span>}
                            </div>

                           
                          
                           <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Description</span>
                                </label>
                                <input type="text" defaultValue={desc}  {...register("desc", { required: true })} title="desc"  className="input input-bordered w-full" />
                                {errors.desc && <span className="text-red-600">Description is required</span>}
                            </div>
                          



                           
                                {/* priority */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text text-white uppercase">Priority</span>
                                    </label>
                                    <select defaultValue={priority} {...register('priority', { required: true })}
                                        className="select select-bordered w-full">
                                        <option disabled value="default">Select a Priority</option>
                                        <option value="low">Low</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="high">High</option>

                                    </select>
                                </div>
     
                            <div className="form-control">
  <label className="label">
    <span className="label-text text-white font-bold">Choose the Date</span>
  </label>
    <DatePicker placeholderText='pick the date' className="input w-full input-bordered text-black" required
      selected={updatedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy" 
    />

</div>

                    </div>
                    {/* update button */}
                   

                    <button className="btn">
                        Update Task
                    </button>
                </form>
  </div>
</div>
          
        </div>
            
        </div>
    );
};

export default UpdateTask;