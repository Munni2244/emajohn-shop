import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Shipping.css'

const Shipping = () => {
    const {user}= useAuth();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="shipping-form">
    <form  onSubmit={handleSubmit(onSubmit)}>
      <input className="input" defaultValue={user.displayName} {...register("name")} />
      <br />
      <input placeholder="email" defaultValue={user.email} className="input" {...register("email", { required: true })} /> <br />

      <input placeholder="city" className="input" {...register("city", { required: true })} /> <br />
      <input placeholder="no." className="input" {...register("no.", { required: true })} /> <br />
      <input placeholder="id" className="input" {...register("id", { required: true })} />
      <br />
      {errors.displayName && <span className="error">This field is required</span>}
      
      <Link to="/placeorder"><input className="button" type="submit" /></Link>
    </form>        
    </div>
    );
};

export default Shipping;