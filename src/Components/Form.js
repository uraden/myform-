import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    alert(Object.keys(data).map((key) => `${key}: ${data[key]}`));
    data ={"firstName":"", "lastName":"", "email":"", "phone":"", "password":"", "confirmPassword":""}
  };
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            ref={register}
            placeholder="first name"
          />
          <p style={{color: "red"}}> {errors.firstName?.message} </p>
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            ref={register}
          />
          <p style={{color: "red"}}> {errors.lastName?.message} </p>
        
          <input
            type="text"
            name="email"
            placeholder="email"
            ref={register}
          />
          <p style={{color: "red"}}> {errors.email?.message} </p>
          <input type="tel" 
          name="phone" 
          placeholder="phone number" 
          ref={register} />
          <p style={{color: "red"}}> {errors.phone?.message} </p>
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={register}
          />
          <p style={{color: "red"}}> {errors.password?.message} </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm Ppassword"
            ref={register}
          />
          <p style={{color: "red"}}> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
