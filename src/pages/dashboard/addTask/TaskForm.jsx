import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../../hooks/UseAxiosPublic';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../../providers/AuthProvider';

const TaskForm = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
      setSelectedDate(date);
     console.log('date:',date);
    };
    const onSubmit = async (data) => {
        console.log(data)
        console.log('selectedDate:', selectedDate);
       
            const TaskItem = {
                title: data.title,
                desc: data.desc,
                selectedDate,
                priority: data.priority,
                email:user?.email

              
            }
            console.log(TaskItem);
           
           
                const taskRes = await axiosPublic.post('/alltask', TaskItem);
                console.log(taskRes.data)
    
                if(taskRes.data.insertedId) {
                    // show success popup
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} is added to the task list.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            
        
     
    };

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="text-5xl font-bold text-white text-center mb-5">SignUp now!</h1>
                          
                           <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Title</span>
                                </label>
                                <input type="text"  {...register("title", { required: true })} title="title" placeholder="title" className="input input-bordered w-full" />
                                {errors.title && <span className="text-red-600">Name is required</span>}
                            </div>

                           
                          
                           <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Description</span>
                                </label>
                                <input type="text"  {...register("desc", { required: true })} title="desc" placeholder="description" className="input input-bordered w-full" />
                                {errors.desc && <span className="text-red-600">Description is required</span>}
                            </div>
                          



                            <div className="flex gap-2">
                                {/* priority */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text text-white uppercase">Priority</span>
                                    </label>
                                    <select defaultValue="default" {...register('priority', { required: true })}
                                        className="select select-bordered w-full">
                                        <option disabled value="default">Select a Priority</option>
                                        <option value="low">Low</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="high">High</option>

                                    </select>
                                </div>
                                
                                

                            </div>
                        
                            <div className="form-control">
  <label className="label">
    <span className="label-text text-white font-bold">Choose the Date</span>
  </label>
    <DatePicker placeholderText='pick the date' className="input w-full input-bordered text-black" required
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy" 
    />

</div>
                           
                            
                            <div className="form-control mt-6">
                                <input className="btn bg-black w-full text-white " type="submit" value="Add Task" />
                            </div>
                        </form>
        </div>
    );
};

export default TaskForm;